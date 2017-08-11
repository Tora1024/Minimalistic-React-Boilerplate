import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './notFound.css';

const NotFound = () => {
  return (
    <main styleName='container'>
			<section styleName='inner-container'>
				<div styleName='lost'></div>
				<h1 styleName='headline'>Uhh ohh! Not sure what happened, but you are out of reach right now..</h1>
				<Link styleName='go-back' to='/'>Please, take me back home!</Link>
			</section>
    </main>
  );
};

export default CSSModules(NotFound, styles);