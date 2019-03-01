import Immutable from 'immutable';
const defaultState = {
    search: '',
};

export default function(state = defaultState, action) {
    let newState = Immutable.fromJS(state).toJS();

    switch (action.type) {
        case 'SEARCH_VIDEO':
            newState.loading = true;
            return newState;
        case 'VIDEO_FETCHED':
            newState.videos = action.payload;
            newState.loading = false;

            return newState;
        default:
            return newState;
    }
}


