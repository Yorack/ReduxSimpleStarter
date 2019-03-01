import axios from 'axios';

const ROUTE_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `key=PAPERCLIP1234`;

export const blogActionType = {
    FETCH_POST: 'FETCH_POST',
};

export const blogAction = {
    fetchPost: () => {
        const request = axios.get(`${ROUTE_URL}/posts?${API_KEY}`);

        return {
            type: blogActionType.FETCH_POST,
            payload: request
        }
    }
};