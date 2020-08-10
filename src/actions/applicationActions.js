import * as types from "./actionTypes";
import ApplicationsApi from "../api/applicationsApi";
import { beginFetchCall, fetchErrorCall } from "./fetchStatusActions";

export function loadApplicationSuccess(applications) {
  return { type: types.LOAD_APPLICATION_SUCCESS, applications };
}

export function addApplicationSuccess(applications) {
  return { type: types.ADD_APPLICATION_SUCCESS, applications };
}

export function loadApplications() {
  return (dispatch) => {
    dispatch(beginFetchCall());
    return ApplicationsApi.getAllApplications()
      .then((applications) => {
        dispatch(loadApplicationSuccess(applications));
      })
      .catch((error) => {
        return error;
      });
  };
}

export function addApplication(props) {
  return ApplicationsApi.addApplication(props)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
