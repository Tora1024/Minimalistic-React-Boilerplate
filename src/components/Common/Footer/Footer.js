import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './footer.css';

const Footer = () => {
  return (
    <footer styleName='footer'>
      <nav styleName='nav'>
        <Link styleName='nav-item' to='/' replace>Home</Link>
        <Link styleName='nav-item' to='/about' replace>About</Link>
      </nav>
      <section styleName='social'>
        <div styleName='facebook'></div>
        <div styleName='linkedin'></div>
        <div styleName='skype'></div>
        <div styleName='github'></div>
      </section>
      <section styleName='copyright'>Created by @Hector</section>
    </footer>
  );
}

export default CSSModules(Footer, styles);