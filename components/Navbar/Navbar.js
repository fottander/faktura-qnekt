import React from 'react';
import Link from 'next/link';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const navbar = props => (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar_logo"><a href="/">Faktura-utan-företag.se</a></div>
        <div className="spacer_nav" />
        <div className="navbar_navigation_items">
            <ul>
                <li><Link href='/'><a>Product</a></Link></li>
                <li><Link href='/about'><a>About</a></Link></li>
            </ul>
        </div>
      </nav>
    </header>
);

export default navbar;
