import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function addApplicationReducer(
  state = initialState.applications,
  action
) {
  switch (action.type) {
    case types.ADD_APPLICATION_SUCCESS:
      return action.addApplication;
    default:
      return state;
  }
}
