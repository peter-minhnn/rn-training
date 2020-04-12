
import { all, fork, take } from 'redux-saga/effects';
import { watchFetchMenuStore } from './homeSaga';
import { watchFetchSignIn } from './authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchMenuStore),
        fork(watchFetchSignIn)
    ]);
}