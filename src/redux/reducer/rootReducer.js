import { combineReducers } from "redux";
import { TaskReducer } from "./taskReducer";
export const rootReducer = combineReducers({
  taskReducer: TaskReducer,
});
