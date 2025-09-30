import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actionTypes/AuthActionTypes';

// Login Actions
export const loginRequest = credentials => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Register Actions
export const registerRequest = userData => ({
  type: REGISTER_REQUEST,
  payload: userData,
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});
