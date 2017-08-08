import React from 'react';
import { Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './layout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="layout">
        <Header />
        <Component {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};

Layout.propTypes = {
  component: PropTypes.function,
}

export default CSSModules(Layout, styles);