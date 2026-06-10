import { configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.text !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
