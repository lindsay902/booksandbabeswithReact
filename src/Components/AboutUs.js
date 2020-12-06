import React from 'react';
import Header from './Header';
import { SectionDivider } from './SectionDivider';

const AboutUs = () => {
    return (
        <div>
            <Header />  
            <SectionDivider title="About Us" />
            <p>Here is our bio!!</p>
        </div>
    )
};

export default AboutUs;