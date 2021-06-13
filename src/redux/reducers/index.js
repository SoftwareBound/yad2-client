import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loginReducer } from "./loginReducer";
import { offersReducer } from "./offersReducer";
import { filterReducer } from "./filterReducer";

export default combineReducers({
  userReducer,
  loginReducer,
  offersReducer,
  filterReducer,
});
