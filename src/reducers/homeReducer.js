import { GET_MENU_RESPONSE, LOADING_REQUEST, GET_MENU_FAILED } from '../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    payload: [],
    error: ''
}

function homeReducer(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case LOADING_REQUEST:
            return { ...newState, loading: true };
        case GET_MENU_RESPONSE:
            return { ...newState, loading: false, payload: action.payload };
        case GET_MENU_FAILED:
            return {...newState, loading: false, error: action.error}
        default:
            return newState;
    }
}

export default homeReducer;