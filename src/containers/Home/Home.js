import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

import Header from '../../components/Header/Header';

class Home extends Component {
  render () {
    return (
      <div styleName='container'>
        <Header />
        <div styleName='greeting'>Home</div>
        { this.props.children }
      </div>
		);
  }
}

export default CSSModules(Home, styles);