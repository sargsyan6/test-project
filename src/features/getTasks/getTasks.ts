import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TTasks = {
  id?: number | string;
  name?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  employeeId?: number | string;
};
const initialState: Array<TTasks> = [];
export const getUser = createAsyncThunk(
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
      return ThunkAPI.rejectWithValue(e);
    }
  }
);
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state: Array<TTasks>, { payload }) => {
      return payload;
    },
    createLocalTask: (state, { payload }) => {
      return [...state, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<TTasks[]>) => {
        state = action.payload;
        return state;
      })
      .addCase(getUser.rejected, () => {
        console.error("Something was wrong");
      });
  },
});

export const { addTasks, createLocalTask } = tasksSlice.actions;
export default tasksSlice.reducer;
