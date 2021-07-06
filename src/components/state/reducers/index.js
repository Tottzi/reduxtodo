import { combineReducers } from "redux";
import todoReducer from "../../reducers/todoReducer";

const reducers = combineReducers({
  todoReducer: todoReducer
});

export default reducers;