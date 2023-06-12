import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Tasks from "./Components/Tasks/Tasks";
import Employees from "./Components/Employees";
import Error from "Components/Error";

function App() {
  return (
    <>
    <Home/>
    
      <Routes>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="tasks" element={<Tasks/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
