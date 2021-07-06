// ducks pattern
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
  entities: [{
  id: 'ID',
  title: 'todoTitle',
  desc: 'todoDesc',
  isActive: true,
}]}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeStatus: (todos, action) =>{
        todos.entities = todos.entities.map(todo => (todo.id === action.payload.id
        ? { ...todo, isActive: !todo.isActive }
        : todo));
    },
    delTodo: (todos, action) => {
      todos.entities = todos.entities.filter(todo => todo.id !== action.payload.id);
    },
    addTodo: (state, action) => {
      const todo = action.payload
      state.entities.push(todo)
    }
  }
})

export const { addTodo, delTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
