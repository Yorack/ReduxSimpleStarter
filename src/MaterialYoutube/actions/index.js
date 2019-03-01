export const commonActions = {
    search: (search) => {
        return {
            type: 'SEARCH',
            payload: search,
        }
    },
    searchVideo: (search) => {
        return {
            type: 'SEARCH_VIDEO',
            payload: search,
        }
    },
    selectVideo: (video) => {
        return {
            type: 'SELECT_VIDEO',
            payload: video,
        }
    }
};