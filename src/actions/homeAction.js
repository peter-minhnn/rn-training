import * as types from '../constants/ActionsType';

//Action request get user by call api
export const LoadingRequest = () => {
    return { type: types.LOADING_REQUEST, loading: true };
}

//Action request get user by call api
export const GetMenuRequest = () => {
    return { type: types.GET_MENU_REQUEST };
}

//Action reponse get user by call api
export const GetMenuResponse = (result) => {
    return { type: types.GET_MENU_RESPONSE, payload: result };
}

//Action reponse get user by call api
export const GetMenuFailed = (message) => {
    return { type: types.GET_MENU_FAILED, error: message };
}