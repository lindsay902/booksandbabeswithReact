import React from 'react';
import Header from './Header';
import FeaturedBooks from './FeaturedBooks';
import VoteForBooks from './VoteForBooks';
import { Social } from './SocialComponent';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />,
                <FeaturedBooks />,
                <VoteForBooks />,
                <Social />,
            </div>
        );
    }


 

}

export default Home;


