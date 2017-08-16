import React from 'react'; 
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from './components/Common/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const Routes = ({ history }) => {
  return (
    <Router history={history} >
      <Switch>
        <Layout exact path='/' component={Home} />
        <Layout path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  history: PropTypes.object,
}

export default Routes;
