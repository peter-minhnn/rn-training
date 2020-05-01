import { LOADING_REQUEST, GET_MENU_FAILED, GET_MENU_RESPONSE } from '../../../../constants';
import _ from 'lodash';
import { selectSubcategories } from '../selectors/homeSelector';

const initialState = {
    loading: false,
    error: ''
}

function homeReducer(state = initialState, action) {
    let newState = _.cloneDeep(state);
    switch (action.type) {
        case LOADING_REQUEST:
            return { ...newState, loading: true };
        case GET_MENU_RESPONSE:
            return { ...newState, loading: false, payloadSubCategories: action.payloadCategories };
        case GET_MENU_FAILED:
            return {...newState, loading: false, error: action.error}
        default:
            return {...newState};
    }
}

export default homeReducer;