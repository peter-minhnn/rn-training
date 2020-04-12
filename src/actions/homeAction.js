import * as types from '../constants/ActionsType';

//Action request get user by call api
const GetMenuRequest = () => {
    return { type: types.GET_MENU_REQUEST };
}

const GetMenuResponse = (result) => {
    return { type: types.GET_MENU_RESPONSE, payload: result };
}

const GetMenuFailed = (error) => {
    return { type: types.GET_MENU_FAILED, error: error };
}

export { GetMenuRequest, GetMenuResponse, GetMenuFailed }