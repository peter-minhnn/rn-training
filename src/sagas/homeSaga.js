import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../commons';
import { GET_MENU_REQUEST } from '../constants';
import { GetMenuResponse, LoadingRequest, GetMenuFailed } from '../actions';
import Reactotron from 'reactotron-react-native';

const getData = async () => {
  const response = await callApi('GET', 'api/user/getUser');
  return response;
}

function* fetchUsers() {
  try {
    yield put(LoadingRequest())
    const menus = yield call(getData)
    yield put(GetMenuResponse(menus))
  } catch (error) {
    yield put(GetMenuFailed(error.message))
  }
}

export function* watchFetchUsers() {
  yield takeEvery(GET_MENU_REQUEST, fetchUsers)
}

export default watchFetchUsers;