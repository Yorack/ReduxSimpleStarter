import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';

import theme from './theme';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';

class testApp extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <div>
                        <Button >
                            <div>Button 1</div>
                        </Button>
                        <Button color="secondary">
                            <div>Button 2</div>
                        </Button>
                    </div>
                </AppBar>
            </MuiThemeProvider>
        );
    }
};

export default testApp;
