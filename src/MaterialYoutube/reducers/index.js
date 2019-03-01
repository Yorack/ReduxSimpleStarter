import {combineReducers} from 'redux';
import CommonReducer from './CommonReducer.js';

const rootReducer = combineReducers({
    common: CommonReducer,
});

export default rootReducer;