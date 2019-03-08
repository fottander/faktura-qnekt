import React from 'react';
import Link from 'next/link';

const sideDrawer = props => {
  let drawerClasses ='side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link href='/'><a>Products</a></Link></li>
        <li><Link href='/about'><a>About</a></Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
