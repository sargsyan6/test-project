import React, { FC, useEffect, useState } from "react";
import "./Employees.css";
import { useAppDispatch, useAppSelector } from "app/store";
import { TEmployees, addEmployees } from "features/getEmployees/getEmployees";
import OneEmployee from "Components/OneEmployee";
import { addAllEmployees } from "features/getAllEmployees/getAllEmployees";
import ChangeInputs from "Components/ChangeInputs";
import AddTaskInputs from "Components/AddTaskInputs";

type TArr = Array<undefined>

const Employees = () => {
  const selectorPagination = useAppSelector((st) => st.employees);
  const selectorAll = useAppSelector((st) => st.allEmployees);
  const dispatch = useAppDispatch()
  const [count , setCount] = useState(1)
  const [changeMode , setChangeMode] = useState(false)
  const [isAddTaskOpen , setIsAddTaskOpen] = useState(false)
  const limit = 3
  const arr:TArr = []
  arr.length = Math.ceil(selectorAll.length / limit)
  

  const handleChange = ()=>{
    setChangeMode(!changeMode)
  }
  
  
  
  
  useEffect(() => {

    fetch(`https://rocky-temple-83495.herokuapp.com/employees?_page=${count}&_limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        
        dispatch(addEmployees(res));
      });
  }, [count]);


  useEffect(()=>{
    fetch("https://rocky-temple-83495.herokuapp.com/employees")
        .then((res)=>res.json())
            .then((res)=>dispatch(addAllEmployees(res)))
  },[])

  const handleClickButton = (index:number)=>{
    if(index + 1 !== count || index + 1 < selectorAll.length){
        setCount(count+1)
    }
    else if(count === selectorAll.length ){
        setCount(1)
    }
  }
  return (

    <>
    <div className="employee_container">
        {selectorPagination.map((it:TEmployees)=>changeMode? <ChangeInputs key={it.id} {...it}/> : <OneEmployee handleChange={handleChange}  key={it.id} {...it}/>)}
    </div>
    <div className="pagination">
        {arr.map((it , index)=><button onClick={()=>{
            handleClickButton(index)
        }}>{index+1}</button>)}
    </div>
    {!isAddTaskOpen ? <div onClick={()=>setIsAddTaskOpen(true)}>Add Task</div> : <AddTaskInputs/> }
    </>
    
  )
  
};

export default Employees;
