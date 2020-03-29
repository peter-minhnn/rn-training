import * as types from '../constants/ActionsType';

//Action request get user by call api
const Inc = () => {
    dispatch({ type: types.INCREMENT });
}

//Action reponse get user by call api
const Dec = () => {
    dispatch({ type: types.DECREMENT });
}

//Start Countdown
const StartCountdown = () => {
    dispatch({ type: types.START_COUNTDOWN });
}

//Action reponse get user by call api
const CancelCountdown = () => {
    dispatch({ type: types.CANCEL_COUNTDOWN });
}

export { 
    Inc, 
    Dec,
    StartCountdown,
    CancelCountdown
};
