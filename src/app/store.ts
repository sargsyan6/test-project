import { configureStore } from "@reduxjs/toolkit";
import employeesReduser from "../features/getEmployees/getEmployees";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import tasksReducer from "features/getTasks";
import getAllEmployeesReducer from "features/getAllEmployees";

const store = configureStore({
  reducer: {
    employees:employeesReduser,
    allEmployees:getAllEmployeesReducer,
    tasks:tasksReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => TDispatch = useDispatch;

export default store;
