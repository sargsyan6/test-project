import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Home.css"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div>
                <button onClick={()=>{
                    navigate("employees")
                }} className="employees_button">Employees</button>
            </div>
            <div>
                <button onClick={()=>navigate("tasks")} className="tasks_button">Tasks</button>
            </div>
        </div>
    );
};

export default Home;