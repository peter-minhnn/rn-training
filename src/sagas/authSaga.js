import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../commons';
import { SIGN_IN_REQUEST } from '../constants';
import { commonActions } from '../actions';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

/* SIGN IN SAGA */
const getData = async (data) => {
  const response = await callApi('POST', '/?api_key=&rt=a/account/login', data);
  return response;
}

function* fetchSignIn(action) {
  try {
    yield put(commonActions.LoadingRequest())
    const result = yield call(getData, action.data)
    if (result.status === 1) {
      AsyncStorage.setItem('signInToken', result.token);
    }
    yield put(commonActions.ApiResponse(result))
  } catch (error) {
    yield put(commonActions.ApiFailed(error.message))
  }
}

export function* watchFetchSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, fetchSignIn)
}

export default watchFetchSignIn;