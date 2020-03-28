

export default function* rootSaga() {
    yield all([
        homeActionWatcher()
    ]);
}