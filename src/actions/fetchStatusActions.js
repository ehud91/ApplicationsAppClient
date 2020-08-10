import * as types from "./actionTypes";

export function beginFetchCall() {
  return { type: types.BEGIN_FETCH_CALL };
}

export function fetchErrorCall() {
  return { type: types.FETCH_ERROR_CALL };
}
