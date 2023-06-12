import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Tasks from "./Components/Tasks/Tasks";
import Employees from "./Components/Employees";

function App() {
  return (
    <>
    <Home/>
      <Routes>
        <Route path="" element={<Employees/>}/>
        <Route path="" element={<Tasks/>}/>
      </Routes>
    </>
  );
}

export default App;
