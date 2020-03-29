import { INCREMENT, DECREMENT, START_COUNTDOWN, DEC_COUNTDOWN, CANCEL_COUNTDOWN } from '../constants/ActionsType';

const initialState = {
    count: 0,
}

function homeReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case START_COUNTDOWN:
            return { ...state, countdown: action.countdown };
        case DEC_COUNTDOWN:
            return { ...state, countdown: state.countdown - 1 };
        case CANCEL_COUNTDOWN:
            return { ...state, countdown: 0 };
        default:
            return state;
    }
}

export default homeReducer;