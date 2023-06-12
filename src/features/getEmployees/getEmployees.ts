import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";

export type TEmployees = {
  id: number | string;
  name: string;
  surname: string;
  email: string;
  position: string;
  changeMode?:boolean
  handleChange?:()=>void
}


const initialState: Array<TEmployees> = [];


export const deleteEmployees = createAsyncThunk(
    "async/getEmployees",
    async (id:number|string) => {        
        const baseUrl = `https://rocky-temple-83495.herokuapp.com/employees/${id}`;
        try {
            return await fetch(baseUrl, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            })
            .then((res) => res.json())
               .then((res) =>{                
                console.log(res)
               })
        } catch (e) {
            return "reject"
        }
    }
)


export const employeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
      addEmployees:(state:TEmployees[] ,{payload})=>{
        return payload
      }
    },
   
  });


  export const {addEmployees} = employeesSlice.actions
  export default employeesSlice.reducer