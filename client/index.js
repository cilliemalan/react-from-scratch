import './styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './App'

const approot = document.getElementById('react-app');
ReactDOM.render(
    <AppContainer>
        <HashRouter>
            <App />
        </HashRouter>
    </AppContainer>,
    approot);

if (module.hot) {
    console.log('hot reloading active');
    module.hot.accept('./App', () => {
        console.log('doing hot reload');
        const NextApp = require('./App').App;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            approot
        );
    });
}