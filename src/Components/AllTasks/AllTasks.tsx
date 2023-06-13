import React from "react";
import "./AllTasks.css";
import { useAppSelector } from "app/store";
import { TTasks } from "features/getTasks/getTasks";

const AllTasks = () => {
  const select:Array<TTasks> = useAppSelector((state) => state.tasks);
  
  
  
  return (
    <>
      {select.length ?select.map(({id,name,description ,startDate , endDate }:TTasks) => {
        return <div className="tasks_container" key={id}>
            <div>{name}</div>
            <div>{description}</div>
            <div>{startDate}</div>
            <div>{endDate}</div>
        </div>
        
      }) :<div>Not found</div>}
    </>
  );
};

export default AllTasks;
