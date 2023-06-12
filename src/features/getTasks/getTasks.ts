import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TTasks = {
  id: number|string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  employeeId?: number|string;
}[];

const initialState: TTasks = [];

export const getTasks = createAsyncThunk(
  "async/getEmployees",
  async (arg,thunkAPI) => {
    const baseUrl = "https://rocky-temple-83495.herokuapp.com/tasks";
    try {
      return await fetch(baseUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res: TTasks) => {
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
    addTasks:(state:TTasks , {payload})=>{
      return payload
    }
  },
});

export const {addTasks} = tasksSlice.actions
export default tasksSlice.reducer;
