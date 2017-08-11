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
      <div className={styles.layout}>
        <section className={styles.header}>
          <Header/>
        </section>
        <main className={styles.component}>
          <Component {...matchProps} />
        </main>
        <section className={styles.footer}>
          <Footer />
        </section>
      </div>
    )} />
  )
};

Layout.propTypes = {
  component: PropTypes.func,
}

export default CSSModules(Layout, styles);