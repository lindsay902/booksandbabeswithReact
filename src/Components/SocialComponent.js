import React from 'react';
import iglogo from './Images/iglogo.png';

export class Social extends React.Component {
    render() {
        return (
            <div className="footer">
                <h3>Find us on Instagram</h3>
                <img className="ig-logo" src={iglogo} alt="Instagram" target="_blank"></img>
                <h3>Contact &#8226; About Us</h3>           
            </div>
        
        )
    }
}

