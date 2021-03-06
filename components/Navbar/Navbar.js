import React from 'react';
import Link from 'next/link';

const navbar = props => (
    <header className="navbar">
      <nav className="navbar_navigation">
        <div className="navbar_logo"><a href="/"><img src="./static/images/logga-faktura.png" alt="Fakturera-utan-företag" />Faktura-utan-företag.se</a></div>
        <div className="spacer_nav" />
        <div className="navbar_navigation_items">
            <ul>
                <li><Link href='/news'><a>Nyheter</a></Link></li>
                <li><Link href='/vad_ar_egenanstallning'><a>Vad är egenanställning?</a></Link></li>
                <li><Link href='/about'><a>Om oss</a></Link></li>
            </ul>
        </div>
      </nav>
    </header>
);

export default navbar;
