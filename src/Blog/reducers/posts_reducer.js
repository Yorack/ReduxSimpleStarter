import { blogActionType } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case blogActionType.FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state
    }
}