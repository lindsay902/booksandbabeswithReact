import React from 'react';
import Header from './Header';
import FeaturedBooks from './FeaturedBooks';
import VoteForBooks from './VoteForBooks';
import { Social } from './SocialComponent';


//ReactDOM.render(<App />, document...)
class App extends React.Component {

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

export default App;


