import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../commons';
import { GET_MENU_REQUEST } from '../constants';
import { LoadingRequest, ApiResponse, ApiFailed } from '../actions';
import Reactotron from 'reactotron-react-native';

const getDataCategory = async () => {
  const response = await callApi('GET', '?api_key=&rt=a/product/category&category_id');
  return response;
}

function* fetchCategory() {
  try {
    yield put(LoadingRequest())
    const menus = yield call(getDataCategory)
    yield put(ApiResponse(menus))
  } catch (error) {
    yield put(ApiFailed(error.message))
  }
}

export function* watchFetchMenuStore() {
  yield takeLatest(GET_MENU_REQUEST, fetchCategory)
}

export default watchFetchMenuStore;