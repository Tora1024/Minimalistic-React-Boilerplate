import React from 'react'; 
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/404/404';

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
