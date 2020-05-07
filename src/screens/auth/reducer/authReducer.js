import { LOADING_REQUEST, SIGN_IN_RESPONSE, SIGN_IN_FAILED } from '../../../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    payload: {},
    error: ''
}

function authReducers(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case LOADING_REQUEST:
            return { ...newState, loading: true };
        case SIGN_IN_RESPONSE:
            return { ...newState, loading: false, payload: action.payload };
        case SIGN_IN_FAILED:
            return { ...newState, loading: false, error: action.error }
        default:
            return { ...newState };
    }
}

export default authReducers;