
import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './homeSaga';

export default function* rootSaga() {
    yield all([
        watchFetchUsers()
    ]);
}