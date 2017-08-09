import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render () {
    return (
      <div styleName='container'>
        Home
      </div>
		);
  }
}

export default CSSModules(Home, styles);