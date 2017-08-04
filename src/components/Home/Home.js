import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './home.css';

class Home extends Component {
  render () {
    return (
      <div styleName='container'>
        
        { this.props.children }
        home
      </div>
	);
  }
}

Home.propTypes = {
  children: PropTypes.object,
}

export default CSSModules(Home, styles);