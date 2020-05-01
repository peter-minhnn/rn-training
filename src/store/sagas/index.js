
import { all, fork, take } from 'redux-saga/effects';
import { watchFetchMenuStore } from '../../views/screens/home/sagas/homeSaga';
import { watchFetchSignIn } from '../../views/screens/auth/saga/authSaga';

export default function* rootSaga() {
    yield all([
        fork(watchFetchMenuStore),
        fork(watchFetchSignIn)
    ]);
}