import { createSlice,  } from "@reduxjs/toolkit";
import { TEmployees } from "features/getEmployees/getEmployees";




const initialState: Array<TEmployees> = [];





export const allEmployeesSlice = createSlice({
    name: "allEmployees",
    initialState,
    reducers: {
      addAllEmployees:(state:TEmployees[] ,{payload})=>{
        return payload
      }
    },
   
  });


  export const {addAllEmployees} = allEmployeesSlice.actions
  export default allEmployeesSlice.reducer