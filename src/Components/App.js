import React from 'react';
import Home from './Home';
import { Router } from '@reach/router';
import AboutUs from './AboutUs';


class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Home path="/" />
                    <AboutUs path="/aboutus" />
                </Router>
            </div>
        );
    }

}

export default App;


