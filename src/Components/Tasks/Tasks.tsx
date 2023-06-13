import React, { useEffect, useState } from 'react';
import "./Tasks.css"
import getTasks, { addTasks } from 'features/getTasks/getTasks';
import AllTasks from 'Components/AllTasks';
import TaskInputs from 'Components/TaskInputs';
import { useAppDispatch } from 'app/';


const Tasks = () => {

  const [isOpen , setIsOpen] = useState(false)
  const [isLoading , setIsLoading] = useState(true)


  const handleOpen = ()=> setIsOpen(true)
  const handleClose = ()=> setIsOpen(false)

  const dispatch = useAppDispatch()

    useEffect(()=>{
        // fetch("https://rocky-temple-83495.herokuapp.com/tasks")
        //     .then((res)=>res.json())
        //     .then((res)=>{
        //         dispatch(addTasks(res))
        //         setIsLoading(false)
                
        //     })

        dispatch(getTasks(undefined))
    },[])
    return (
        <div>
            {isLoading? <div>...Loading</div> : <AllTasks/>}
            {!isOpen ? <button onClick={handleOpen}>Create Tasks</button> : <TaskInputs handleClose={handleClose} /> }
        </div>
    );
};

export default Tasks;