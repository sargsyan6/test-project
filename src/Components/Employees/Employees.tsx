import React, { FC, useEffect, useState } from "react";
import "./Employees.css";
import { useAppDispatch, useAppSelector } from "app/store";
import { TEmployees, addEmployees } from "features/getEmployees/getEmployees";
import OneEmployee from "Components/OneEmployee";
import AddTaskInputs from "Components/AddTaskInputs";
import Pagination from "Components/Pagination";


const Employees = () => {
  const selector = useAppSelector((st) => st.employees);
  const dispatch = useAppDispatch()
  const [cuurrentPage , setCurrentPage] = useState(1)
  const [limit] = useState(5)
  const [isAddTaskOpen , setIsAddTaskOpen] = useState(false)
  const [isLoading , setIsLoading] = useState(false)

  const lastPageIndex = cuurrentPage * limit
  const firstPageIndex = lastPageIndex - cuurrentPage
  const current = selector.slice(firstPageIndex , lastPageIndex)
  
  

  const paginate = (pageNumber:number)=> {
    if(pageNumber !==cuurrentPage) setCurrentPage(pageNumber)
  }
  
  

 
  
  

  useEffect(()=>{
    fetch("https://rocky-temple-83495.herokuapp.com/employees")
        .then((res)=>res.json())
            .then((res)=>dispatch(addEmployees(res)))
  },[])

  

  const changeAddTaskMode = ():void=>setIsAddTaskOpen(!isAddTaskOpen)
  return (

    <>
    <div className="employee_container">
        {current.map((it:TEmployees)=><OneEmployee key={it.id} {...it}/>)}
    </div>
    <Pagination limit = {limit} paginate={paginate} total={selector.length}/>
    {!isAddTaskOpen ? <div onClick={changeAddTaskMode}>Add Task</div> : <AddTaskInputs changeAddTaskMode={changeAddTaskMode}/> }
    </>
    
  )
  
};

export default Employees;
