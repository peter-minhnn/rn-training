
import { all, fork } from 'redux-saga/effects';
import { watchFetchUsers } from './homeSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchUsers)
    ]);
}