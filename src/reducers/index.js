import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import authReducers from './authReducer';

const rootReducer =  combineReducers({
    homeReducer,
    authReducers
});

export default rootReducer;