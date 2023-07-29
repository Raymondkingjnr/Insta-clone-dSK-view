import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";

export const rootReducers = combineReducers({
  user: userSlice.reducer,
});
