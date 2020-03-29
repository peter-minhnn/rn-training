import * as types from '../constants/ActionsType';

//Action request get user by call api
const LoadingRequest = () => {
    dispatch({ type: types.LOADING_REQUEST, loading: true });
}

//Action request get user by call api
const GetUserRequest = (userId) => {
    dispatch({ type: types.GET_USER_REQUEST, userId: userId });
}

//Action reponse get user by call api
const GetUserResponse = (result) => {
    dispatch({ type: types.GET_USER_RESPONSE, payload: result });
}


export {
    LoadingRequest,
    GetUserRequest,
    GetUserResponse
};
