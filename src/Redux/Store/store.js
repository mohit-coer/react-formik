import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import employeeReducer from "./../Employee/EmployeeReducer";
import rootReducer from "./../rootreducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
