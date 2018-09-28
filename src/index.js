import React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app';

const APPLICATION_CONTAINER_ID = document.getElementById('react-app')

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        APPLICATION_CONTAINER_ID
    )
}

const unmountApp = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById(APPLICATION_CONTAINER_ID));
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('Accepting the updated App module!');

        unmountApp();

        render(App)
    })
}

