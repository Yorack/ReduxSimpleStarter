import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {withStyles} from '@material-ui/core/styles';
import '../../style/weather.css';
import PostsContainer from "./component/PostsContainer.jsx";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const styles = {
    root: {
        marginTop: 10,
    },
};

class WeatherApp extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className={classes.root}>
                    <PostsContainer />
                </div>
            </Provider>
        );
    }
}

export default withStyles(styles)(WeatherApp);
