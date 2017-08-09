import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './header.css';

const Header = () => {
  return (
    <header styleName='header'>	
      <h1 styleName='title'>Minimalistic Boilerplate</h1>
      <nav styleName='nav'>
        <Link styleName='nav-item' to='/'>Home</Link>
        <Link styleName='nav-item' to='/about'>About</Link>
      </nav>
    </header>
	);
}

export default CSSModules(Header, styles);