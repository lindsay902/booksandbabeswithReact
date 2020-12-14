import React from 'react';
import Home from './Home';
import { Router } from '@reach/router';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';


class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Home path="/" />
                    <AboutUs path="/aboutus" />
                    <ContactUs path="/contact" />
                </Router>
            </div>
        );
    }

}

export default App;


