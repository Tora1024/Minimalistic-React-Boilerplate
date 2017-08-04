import React from 'react'; 
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Commons/Header/Header';

import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const Routes = ({ history }) => {
  return (
    <Router history={history} >
      <main>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
        
      </main>
    </Router>
  );
};

Routes.propTypes = {
  history: PropTypes.object,
}

export default Routes;
