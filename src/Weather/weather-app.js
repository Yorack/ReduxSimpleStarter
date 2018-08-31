import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import SearchBar from './containers/search-bar';
import { withStyles } from '@material-ui/core/styles';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const styles = {
    root: {
        marginTop: 10,
    },
};

class WeatherApp extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className={classes.root}>
                    <SearchBar />
                </div>
            </Provider>
        );
    }
};

export default withStyles(styles)(WeatherApp);
