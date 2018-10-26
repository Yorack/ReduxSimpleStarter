import {weatherActionType} from '../actions';

export default function(state = [], action) {

    if (action.type === weatherActionType.FETCH_WEATHER) {
        if (action.payload.status === 200) {
            return [action.payload.data, ...state];
        }
    }

    return state;
}


