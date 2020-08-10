import { combineReducers } from "redux";
import applicationReducer from "./applicationsReducer";
import fetchStatusReducer from "./fetchStatusReducer";
import addApplicationReducer from "./addApplicationReducer";

const rootReducer = combineReducers({
  applicationReducer,
  addApplicationReducer,
  fetchStatusReducer,
});

export default rootReducer;
