import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.css';

class Header extends Component {
  render () {
    return (
        <h1 styleName='header'>Header</h1>
		);
  }
}

export default CSSModules(Header, styles);