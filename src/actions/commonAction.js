import * as types from '../constants/ActionsType';

//Action set loading while calling api
export const LoadingRequest = () => {
    return { type: types.LOADING_REQUEST, loading: true };
}

//Action response payload result when call api success
export const ApiResponse = (result) => {
    return { type: types.API_RESPONSE, loading: false, payload: result };
}

//Action response error when calling api failed
export const ApiFailed = (error) => {
    return { type: types.API_FAILED, error: error };
}