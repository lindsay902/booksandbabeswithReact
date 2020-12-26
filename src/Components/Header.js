import React, { useState, useRef } from 'react';
import Menu from './Menu';
import Burger from './Burger';
import { useOnClickOutside } from './hooks';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { NavBar } from './NavBar';


function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));
  
    return (
        <div className="header">
            <div className="hamburgerMenu">
                <ThemeProvider theme={theme}>

                <div className="menu">
                    <div ref={node}>
                        <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                        </FocusLock>
                    </div>
                    <div>
                    <img className="logo-image" src="https://iili.io/dvbcR1.md.png" alt="Books & Babes"/>
                    </div>
                    <div>
                        <button onClick="localhost:3001/login">login/register</button>
                    </div>
                </div>
                <div>

                </div>
                </ThemeProvider>
            </div> 
            <div className="navbar">
                <img className="logo" 
                src="https://iili.io/dvbcR1.md.png" alt="Books & Babes"/>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;