import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Request Access</h1>
                <p>You don't have access.</p>
            </div>
        );
    }
}
export default HomePage;