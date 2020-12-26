import React from 'react';
import Header from './Header';
import FeaturedBooks from './FeaturedBooks';
import VoteForBooks from './VoteForBooks';
import { Social } from './SocialComponent';
//import LandingPage from './LandingPage';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="background">
                <FeaturedBooks />
                <VoteForBooks />
                <Social />
                </div>
            </div>
        );
    }


 

}

export default Home;


