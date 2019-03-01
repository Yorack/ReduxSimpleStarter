import axios from 'axios';
const API_KEY = 'AIzaSyB5BKTc69oBzFC65U2OsNuC0QCMsgTSx2I';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

const commonMiddleware = store => next => action => {
    if (action.type === 'SEARCH_VIDEO') {
        // TODO a mettre tout ça dans un service :)
        const params = {
            part: 'snippet',
            key: API_KEY,

            q: action.payload,
            type: 'video',
            maxResults: 10,
        };

        axios.get(ROOT_URL, { params: params })
            .then(function(response) {
                store.dispatch({
                    type: 'VIDEO_FETCHED',
                    payload: response.data.items,
                });
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    return next(action);
};

export default commonMiddleware;