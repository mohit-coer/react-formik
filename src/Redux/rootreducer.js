import { combineReducers } from "redux";
import employeeReducer from "./Employee/EmployeeReducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
});

export default rootReducer;
