import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { GET_MENU_REQUEST, GET_MENU_RESPONSE, GET_MENU_FAILED } from '../../../constants';
import { LoadingRequest, ApiFailed, callApi } from '../../../commons';

const getDataCategory = async () => {
  let arrData = [];
  let obj = {};
  return await callApi('GET', '?api_key=&rt=a/product/category&category_id')
    .then(async response => {
      for (let i = 0; i < response.subcategories.length; i++) {
        const element = response.subcategories[i];
        const productDatas = await callApi('GET', `?api_key=&rt=a/product/filter&page=1&rows=3&sidx=price&sort=ACS&category_id=${element.category_id}`);
        obj = Object.assign({}, { products: productDatas.rows }, { subcategories: element });
        arrData.push(obj);
      }
      return arrData;
    })
    .finally(arrData => { return arrData })
    .catch(error => {
      console.log('[ERROR CATCH] [getDataCategory] Get data by calling api failed: ', error.message);
    });
}

function* fetchCategory() {
  try {
    yield put(LoadingRequest())
    const menus = yield call(getDataCategory);
    yield put({ type: GET_MENU_RESPONSE, payload: menus })
  } catch (error) {
    yield put(ApiFailed(GET_MENU_FAILED, error.message))
  }
}

export function* watchFetchMenuStore() {
  yield takeEvery(GET_MENU_REQUEST, fetchCategory)
}

export default watchFetchMenuStore;