import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

//Create Saga Middleware (https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
const sagaMiddleware = createSagaMiddleware();

const ConfigureStore = (initialState) => {
    //Create Store
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(), window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
    //Run Saga middleware
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextReducer = require('../reducers/index').default
            store.replaceReducer(nextReducer)
        })
    }
    return store;
}

export default ConfigureStore;