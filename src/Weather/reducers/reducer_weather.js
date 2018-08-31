import {weatherActionType} from '../actions';

export default function(state = null, action) {

    console.log('Action received:', action);


    switch (action.type) {
        case weatherActionType.FETCH_WEATHER:

            return action.payload;
        default:
            return state;
    }

    return state;
}


