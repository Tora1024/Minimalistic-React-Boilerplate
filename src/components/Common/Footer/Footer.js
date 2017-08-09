import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './footer.css';

const Footer = () => {
  return (
    <footer styleName='footer'>
      <nav styleName='nav'>
        <Link styleName='nav-item' to='/'>Home</Link>
        <Link styleName='nav-item' to='/about'>About</Link>
      </nav>
      <div>Social Media</div>
    </footer>
  );
}

export default CSSModules(Footer, styles);