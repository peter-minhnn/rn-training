
import { all, fork, take } from 'redux-saga/effects';
import { watchFetchMenuStore } from '../../screens/home/sagas/homeSaga';
import { watchFetchSignIn } from '../../screens/auth/saga/authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchMenuStore),
        fork(watchFetchSignIn)
    ]);
}