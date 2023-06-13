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
  const [limit] = useState(2)
  const [isAddTaskOpen , setIsAddTaskOpen] = useState(false)
  const [isLoading , setIsLoading] = useState(true)

  const lastPageIndex = cuurrentPage * limit
  const firstPageIndex = lastPageIndex - limit
  const current = selector.slice(firstPageIndex , lastPageIndex )
  
  
  

  const paginate = (pageNumber:number)=> {
    if(pageNumber !==cuurrentPage) setCurrentPage(pageNumber)
  }
  
  

 
  
  

  useEffect(()=>{

    fetch("https://rocky-temple-83495.herokuapp.com/employees")
        .then((res)=>res.json())
            .then((res)=>{
              setIsLoading(false)
              dispatch(addEmployees(res))
            })
  },[])

  

  const changeAddTaskMode = ():void=>setIsAddTaskOpen(!isAddTaskOpen)
  return (

    <>
    <div className="employee_container">
        {isLoading ? <div>...Loading</div> : current.map((it:TEmployees)=><OneEmployee key={it.id} {...it}/>)}
    </div>
    <Pagination limit = {limit} paginate={paginate} total={selector.length}/>
    {!isAddTaskOpen ? <div className="add_task_container"><button className="add_task" onClick={changeAddTaskMode}>Add Task</button></div> : <div className="add_task_container"><AddTaskInputs changeAddTaskMode={changeAddTaskMode}/></div> }
    </>
    
  )
  
};

export default Employees;
