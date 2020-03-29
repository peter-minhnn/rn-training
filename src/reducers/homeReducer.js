import { GET_USER_RESPONSE, LOADING_REQUEST } from '../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    payload: null
}

function homeReducer(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case LOADING_REQUEST:
            return { ...newState, loading: true };
        case GET_USER_RESPONSE:
            return { ...newState, loading: false, payload: action.payload };
        default:
            return newState;
    }
}

export default homeReducer;