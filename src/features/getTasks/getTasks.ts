import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TTasks = {
  id?: number|string;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  employeeId?: number|string;
}

const initialState: Array<TTasks> = [];

export const getTasks = createAsyncThunk(
  "async/getTasks",
  async (arg, ThunkAPI) => {
    const baseUrl = "https://rocky-temple-83495.herokuapp.com/tasks";
    try {
      return await fetch(baseUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res: Array<TTasks>) => {
          return res;
        });
    } catch (e) {
      return "reject";
    }
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks:(state:Array<TTasks> , {payload})=>{
      console.log(payload);
      
      return payload
    } ,
    createLocalTask:(state , {payload})=>{
      console.log(state);
      return [...state , payload]
    }
  },
});

export const {addTasks , createLocalTask} = tasksSlice.actions
export default tasksSlice.reducer;
