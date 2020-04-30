import { combineReducers } from 'redux'
import homeReducer from '../../views/screens/home/reducer/homeReducer'
import authReducers from '../../views/screens/auth/reducer/authReducer'

const rootReducer = combineReducers({
    homeReducer,
    authReducers
});

export default rootReducer;