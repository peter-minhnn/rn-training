import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { callApi } from '../../../../commons';
import { GET_MENU_REQUEST, GET_MENU_RESPONSE, GET_MENU_FAILED } from '../../../../constants';
import { LoadingRequest, ApiFailed } from '../../../../commons/index';

const getDataCategory = async () => {
  const response = await callApi('GET', '?api_key=&rt=a/product/category&category_id');
  return response;
}

function* fetchCategory() {
  try {
    yield put(LoadingRequest())
    const menus = yield call(getDataCategory);
    yield put({ type: GET_MENU_RESPONSE, payloadCategories: menus })
  } catch (error) {
    yield put(ApiFailed(GET_MENU_FAILED, error.message))
  }
}

export function* watchFetchMenuStore() {
  yield takeEvery(GET_MENU_REQUEST, fetchCategory)
}

export default watchFetchMenuStore;