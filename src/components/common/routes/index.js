import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../../App';
import HomePage from '../../home';
import AboutPage from '../../about';
import CoursesPage from '../../courses';
import ManageCoursePage from '../../courses/ManageCoursePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
    </Route>
);