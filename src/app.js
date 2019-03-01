import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './home';
import VideoApp from './Youtube/video-app';
import BookApp from './Library/book-app';
import WeatherApp from './Weather/weather-app';
import BlogApp from './Blog/blog-app';
import testApp from './testFRED/testApp';
import {Link, Route, Router} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar/AppBar';
import '../style/style.css';
import {Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import NoMatch from "./noMatch";
import MaterialsYoutube from './MaterialYoutube/MaterialsYoutube.js';
import ThemeProvider from '@material-ui/styles/ThemeProvider.js';

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
    typography: {
        fontFamily: [
            'Inter ui',
            'Roboto',
        ].join(','),
    },
    spacing: {
        unit: 8,
    },
});

const history = createBrowserHistory();

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: '95%',
            marginTop: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    menu: {
        textDecoration: 'none',
    },
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '/',
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            // Pour vielle version de material
            <MuiThemeProvider theme={theme}>
                {/* Pour nouvelle version de material */}
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Router history={history}>
                        <div>
                            <AppBar position="static" className={'app-bar'}>
                                <Tabs value={value} onChange={this.handleChange} className={classes.menu}>
                                    <Tab label="Home" value={'/'} component={Link} to="/"/>
                                    <Tab label="Video" value={'/video'} component={Link} to="/video"/>
                                    <Tab label="Meowoutube" value={'/meowoutube'} component={Link} to="/meowoutube"/>
                                    <Tab label="Book" value={'/book'} component={Link} to="/book"/>
                                    <Tab label="Weather" value={'/weather'} component={Link} to="/weather"/>
                                    <Tab label="Blog" value={'/blog'} component={Link} to="/blog"/>
                                    <Tab label="test bar" value={'/test'} component={Link} to="/test"/>
                                </Tabs>
                            </AppBar>
                            <div className={classes.layout}>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/video" component={VideoApp}/>
                                    <Route exact path="/meowoutube" component={MaterialsYoutube}/>
                                    <Route exact path="/book" component={BookApp}/>
                                    <Route exact path="/weather" component={WeatherApp}/>
                                    <Route exact path="/blog" component={BlogApp}/>
                                    <Route exact path="/test" component={testApp}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);