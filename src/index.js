
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './components/common/routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);