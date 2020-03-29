import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchGetUser } from '../commons';
import { GET_USER_REQUEST } from '../constants';
import { GetUserResponse, LoadingRequest } from '../actions';
import Reactotron from 'reactotron-react-native';

function* fetchUsers(action) {
  try {
    yield put(LoadingRequest())
    const users = yield call(fetchGetUser, action.userId);
    yield put(GetUserResponse(users))
  } catch (error) {
    Reactotron.log(`Call api failed: ${error.message}`);
  }
}

export function* watchFetchUsers() {
  yield takeLatest(GET_USER_REQUEST, fetchUsers)
}
