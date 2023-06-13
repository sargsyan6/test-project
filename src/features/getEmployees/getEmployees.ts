import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TEmployees = {
  id: number | string;
  name: string;
  surname: string;
  email: string;
  position?: string;
};

const initialState: Array<TEmployees> = [];

export const deleteEmployees = createAsyncThunk(
  "async/deleteEmployees",
  async (id: number | string) => {
    const baseUrl = `https://rocky-temple-83495.herokuapp.com/employees/${id}`;
    try {
      return await fetch(baseUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          return id;
        });
    } catch (e) {
      return "reject";
    }
  }
);
export const editEmployees = createAsyncThunk(
  "async/editEmployees",
  async (data: TEmployees) => {
    const baseUrl = `https://rocky-temple-83495.herokuapp.com/employees/${data.id}`;
    try {
      return await fetch(baseUrl, {
        method: "PUT",
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          email: data.email,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => console.log(11))
        .then((res) => res);
    } catch (e) {
      return "reject";
    }
  }
);


export const createEmployees = createAsyncThunk(
  "async/editEmployees",
  async (data: TEmployees) => {
    const baseUrl = "https://rocky-temple-83495.herokuapp.com/employees";
    try {
      return await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => res);
    } catch (e) {
      return "reject";
    }
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployees: (state: TEmployees[], { payload }) => {
      return payload;
    },
    filterEmployees: (state, { payload }) => {
      return state.filter((oneState: TEmployees) => oneState.id !== payload);
    },
    createLocalEmployees: (state, { payload }) => {
      state.push(payload);
    },
    changeEmployess: (state, { payload: { id, name, surname, email } }) => {
      return state.map((oneState) => {
        if (oneState.id === id) {
          return { ...oneState, id, name, surname, email };
        }
        return oneState;
      });
    },
  },
});

export const {
  addEmployees,
  filterEmployees,
  changeEmployess,
  createLocalEmployees,
} = employeesSlice.actions;
export default employeesSlice.reducer;
