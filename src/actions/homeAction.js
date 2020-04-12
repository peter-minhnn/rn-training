import * as types from '../constants/ActionsType';

//Action request get user by call api
const GetMenuRequest = () => {
    return { type: types.GET_MENU_REQUEST };
}

export { GetMenuRequest }