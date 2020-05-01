import { combineReducers } from 'redux'
import homeReducer from '../../screens/home/reducer/homeReducer'
import authReducers from '../../screens/auth/reducer/authReducer'

const rootReducer = combineReducers({
    homeReducer,
    authReducers
});

export default rootReducer;