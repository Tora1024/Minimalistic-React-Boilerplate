import React from 'react'; 
import { Router, Route, hashHistory } from 'react-router';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/404/404';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path='*' component={NotFound} />
    </Router>
  );
};

export default Routes;
