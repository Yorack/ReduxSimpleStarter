import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {withStyles} from '@material-ui/core/styles';
import '../../style/weather.css';
import {BrowserRouter} from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const styles = {
    root: {
        marginTop: 10,
    },
};

class WeatherApp extends Component {
    render() {
        const {classes} = this.props;

        const componentTest = <div>TEST</div>
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className={classes.root}>
                    hello world this will be a blog
                </div>
            </Provider>
        );
    }
}

export default withStyles(styles)(WeatherApp);
