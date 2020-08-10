import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function applicationReducer(
  state = initialState.applications,
  action
) {
  switch (action.type) {
    case types.LOAD_APPLICATION_SUCCESS:
      return action.applications;
    default:
      return state;
  }
}
