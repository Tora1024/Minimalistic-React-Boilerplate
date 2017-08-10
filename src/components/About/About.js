import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.css';

const About = () => {
  return (
    <div styleName='container'>
      About
    </div>
  );
};

export default CSSModules(About, styles);
