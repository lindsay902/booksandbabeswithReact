import React, { useState, useRef } from 'react';
import Menu from './Menu';
import Burger from './Burger';
import { useOnClickOutside } from './hooks';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';




function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
  
    useOnClickOutside(node, () => setOpen(false));
  
    return (
        <div>
            <div className='flex-container'>
                <ThemeProvider theme={theme}>

                <div className="menu">
                <div ref={node}>
                    <FocusLock disabled={!open}>
                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
                </div>
                </ThemeProvider>
                <div className="logo">
                <img class="logo-image" src="https://iili.io/dvbcR1.md.png" alt="Books & Babes"/>
                </div>
                <div className="account">
                    <p>ACCOUNT</p>
                </div>
            </div> 
        </div>
    );
}

export default Header;