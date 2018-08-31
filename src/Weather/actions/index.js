import axios from 'axios';

const API_KEY = '4a28263eff3cdf626dc7ece78ecb7cbf';
const ROUTE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const weatherActionType = {
    FETCH_WEATHER: 'FETCH_WEATHER',
}

export const weatherAction = {
    fetchWeather: (city) => {
        const url = `${ROUTE_URL}&q=${city},us`;
        const request = axios.get(url);

        console.log('Request:', request);

        return {
            type: weatherActionType.FETCH_WEATHER,
            payload: request,
        }
    }
}