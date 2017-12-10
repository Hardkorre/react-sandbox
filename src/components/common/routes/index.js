import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../../App';
import HomePage from '../../home';
import AboutPage from '../../about';
import CoursesPage from '../../courses';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="course" component={CoursesPage}/>
    </Route>
);