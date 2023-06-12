import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TEmployees = {
  id: number | string;
  name: string;
  surname: string;
  email: string;
  position: string;
}[]

const initialState: TEmployees = [];

export const getEmployees = createAsyncThunk(
    "async/getPosts",
    async () => {        
        const baseUrl = "https://rocky-temple-83495.herokuapp.com/employees";
        try {
            return await fetch(baseUrl, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
            .then((res) => res.json())
               .then((res) =>{                
                return res
               })
        } catch (e) {
            return "reject";
        }
    }
)


export const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
      
    },
   
  });


  export default employeesSlice.reducer