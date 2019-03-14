import React from 'react';
import Link from 'next/link';

const navbar = props => (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_logo"><a href="/"><img src="./static/images/logga-faktura.png" alt="Fakturera-utan-företag" />Faktura-utan-företag.se</a></div>
        <div className="spacer_nav" />
        <div className="navbar_navigation_items">
            <ul>
                <li><Link prefetch href='/news'><a>Nyheter</a></Link></li>
                <li><Link prefetch href='/about'><a>Om oss</a></Link></li>
            </ul>
        </div>
      </nav>
    </header>
);

export default navbar;
