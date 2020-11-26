import React from 'react';


class Header extends React.Component {
    render() {
        return (
           <div className='flex-container'>
               <div className="menu">
                   <h2>menu component</h2>
               </div>
               <div className="logo">
                <img class="logo-image" src="https://iili.io/dvbcR1.md.png" alt="Books & Babes"/>
                </div>
               <div className="account">
                   <h2>account</h2>
               </div>
           </div> 
        );
    }
}

export default Header;