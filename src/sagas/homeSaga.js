import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../commons';
import { GET_MENU_REQUEST } from '../constants';
import { commonActions } from '../actions';
import Reactotron from 'reactotron-react-native';

const getData = async () => {
  const response = await callApi('GET', '/?api_key=&rt=a/product/category&category_id');
  return response;
}

function* fetchUsers() {
  try {
    yield put(commonActions.LoadingRequest())
    const menus = yield call(getData)
    yield put(commonActions.ApiResponse(menus))
  } catch (error) {
    yield put(commonActions.ApiFailed(error.message))
  }
}

export function* watchFetchUsers() {
  yield takeEvery(GET_MENU_REQUEST, fetchUsers)
}

export default watchFetchUsers;