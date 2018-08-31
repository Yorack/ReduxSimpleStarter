import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './home';
import VideoApp from './Youtube/video-app';
import BookApp from './Library/book-app';
import WeatherApp from './Weather/weather-app';
import testApp from './testFRED/testApp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4dabf5',
            main: '#2196f3',
            dark: '#1769aa',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#ffffff',
        },
    },
});

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <Link to="/" >
                                    <Button color="inherit">Home</Button>
                                </Link>
                                <Link to="/video">
                                    <Button color="inherit">Video</Button>
                                </Link>
                                <Link to="/book">
                                    <Button color="inherit">Book</Button>
                                </Link>
                                <Link to="/weather">
                                    <Button color="inherit">Weather</Button>
                                </Link>
                                <Link to="/test">
                                    <Button color="inherit">test</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                        <div className={classes.layout}>
                            <Route exact path="/" component={Home} />
                            <Route path="/video" component={VideoApp} />
                            <Route path="/book" component={BookApp} />
                            <Route path="/weather" component={WeatherApp} />
                            <Route path="/test" component={testApp} />
                        </div>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);