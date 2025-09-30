import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from '../actionTypes/AuthActionTypes';
import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
} from '../actions/AuthActions';

import { LoginUser, RegisterUser } from '../../config/endpoints';

// API calls
const loginApi = credentials => axios.post(LoginUser, credentials);

const registerApi = userData => axios.post(RegisterUser, userData);

// Worker Sagas
function* loginSaga(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response?.data || error.message));
  }
}

function* registerSaga(action) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.response?.data || error.message));
  }
}

// Watcher Saga
export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
