import { createEmployees, createLocalEmployees }from 'features/getEmployees/getEmployees';
import "./AddTaskInputs.css"
import React, { FC, useState } from 'react';
import {TEmployees} from "features/getEmployees/getEmployees"
import { useAppDispatch } from 'app/store';

type TFunc = {
    changeAddTaskMode:()=>void
}
type THandleSave = (data:TEmployees)=>void

const AddTaskInputs:FC<TFunc> = ({changeAddTaskMode}) => {

    const [name,setName] = useState("")
    const [surName,setSurName] = useState("")
    const [email,setEmail] = useState("")
    const [position,setPosition] = useState("")

    const dispatch = useAppDispatch()
    
    const handleSave:THandleSave = async (data)=>{
        await dispatch(createEmployees(data)) 
        await dispatch(createLocalEmployees(data)) 
        changeAddTaskMode()
        
        
    }
    
    return (
        
        <div>
            <div><input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setName(e.target.value)
            }} type="text" placeholder='Name' /></div>
            <div><input onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setSurName(e.target.value)
            }} value={surName} type="text" placeholder="surName"/></div>
            <div><input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setEmail(e.target.value)
            }} type="text" placeholder="email"/></div>
            <div><input value={position} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                setPosition(e.target.value)
            }} type="text" placeholder="position"/></div>
            <div><button className='save' onClick={()=>handleSave({id:Math.random() + 5 * Math.random() , name , surname:surName , email,position})}>save</button><button className='cancel' onClick={changeAddTaskMode}>cancel</button></div>
        </div>
    );
};

export default AddTaskInputs;