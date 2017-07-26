import React from 'react'; 
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';

const Routes = ({ history }) => {
  return (
    <Router history={history} >
      <main>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
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
