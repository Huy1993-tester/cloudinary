import { combineReducers } from "redux";
import { SignReducer } from "./SignReducer";

export const RootReducer = combineReducers({
  action: SignReducer,
});
