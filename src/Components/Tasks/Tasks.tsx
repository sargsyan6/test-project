import React, { useEffect } from 'react';
import "./Tasks.css"
import { useAppDispatch , useAppSelector } from "app/store";
import getTasks, { addTasks } from 'features/getTasks/getTasks';


const Tasks = () => {

    const dispatch = useAppDispatch()
    const selector = useAppSelector((state)=>state.tasks)

    useEffect(()=>{
        fetch("https://rocky-temple-83495.herokuapp.com/tasks").
            then((res)=>res.json()).
                then((res)=>addTasks(res))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Tasks;