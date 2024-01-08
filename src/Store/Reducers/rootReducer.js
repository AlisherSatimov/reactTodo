import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import settingsReducer from "./setttingsReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  user: () => ({}),
  settings: settingsReducer,
});

export default rootReducer;
