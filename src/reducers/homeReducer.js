import { LOADING_REQUEST, API_FAILED, API_RESPONSE } from '../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    payload: {},
    error: ''
}

function homeReducer(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case LOADING_REQUEST:
            return { ...newState, loading: true };
        case API_RESPONSE:
            return { ...newState, loading: false, payload: action.payload };
        case API_FAILED:
            return {...newState, loading: false, error: action.error}
        default:
            return {...newState};
    }
}

export default homeReducer;