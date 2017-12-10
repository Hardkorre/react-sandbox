
import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import routes from './components/common/routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);