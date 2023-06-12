import React, { useEffect } from "react";
import "./Employees.css";
import { useAppDispatch, useAppSelector } from "app/store";
import getEmployees from "features/getEmployees";

const Employees = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((st) => st.employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  return <div></div>;
};

export default Employees;
