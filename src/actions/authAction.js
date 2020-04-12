import * as types from '../constants/ActionsType';

//Action request get user by call api
export const SignInRequest = (formDataUser) => {
    return { type: types.SIGN_IN_REQUEST, data: formDataUser };
}
