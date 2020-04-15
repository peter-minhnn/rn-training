import * as types from '../constants/ActionsType';

//Action set loading while calling api
export const LoadingRequest = () => {
    return { type: types.LOADING_REQUEST, loading: true };
}

//Action response error when calling api failed
export const ApiFailed = (type, error) => {
    return { type: type, error: error };
}