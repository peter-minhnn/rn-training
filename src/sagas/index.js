
import { all, fork } from 'redux-saga/effects';
import { watchFetchUsers } from './homeSaga';
import { watchFetchSignIn } from './authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchUsers),
        fork(watchFetchSignIn)
    ]);
}