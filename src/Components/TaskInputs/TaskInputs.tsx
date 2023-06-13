import { useAppSelector } from 'app/store';
import {  createLocalTask } from 'features/getTasks/getTasks';
import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';

type THandleClose = {
    handleClose:()=>void
}

const TaskInputs = ({handleClose}:THandleClose) => {

    const [createTaskData , setCreateTaskData] = useState({id:"" , name:"" , description:"" , startDate:"" , endDate:""  })

    const {id,name,description,startDate,endDate} = createTaskData

    const dispatch = useDispatch()

    const selector = useAppSelector((state)=>state.tasks)
    

    const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCreateTaskData({...createTaskData,id:e.target.value})
    }
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCreateTaskData({...createTaskData,name:e.target.value})
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCreateTaskData({...createTaskData,description:e.target.value})
    }
    const handleChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCreateTaskData({...createTaskData,startDate:e.target.value})
    }
    const handleChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCreateTaskData({...createTaskData,endDate:e.target.value})
    }

    

    const handleCreateLocalTask = ()=>{
        
        dispatch(createLocalTask( createTaskData))
        handleClose()
    }
    return (
        <div>
            <div><input value={id} onChange={handleChangeId} type="text" placeholder='id'  /></div>
            <div><input value={name} onChange={handleChangeName} type="text" placeholder='name' /></div>
            <div><input value={description} onChange={handleChangeDescription} type="text" placeholder='description' /></div>
            <div><input value={startDate} onChange={handleChangeStartDate}  type="date" placeholder='startDate' /></div>
            <div><input value={endDate} onChange={handleChangeEndDate} type="date" placeholder='endDate' /></div>
            <button onClick={handleCreateLocalTask}>Save</button>
            <button onClick={handleClose}>Cancel</button>
        </div>
    );
};

export default TaskInputs;