import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { history } from './helpers/history';
import PrivateRoute from './helpers/private.route';
import {
  homePageLink,
  loginPageLink,
  signupPageLink,
} from './constants/link.constants';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={['/', loginPageLink]} component={LoginPage} />
        <Route path={signupPageLink} component={SignUpPage} />
        <PrivateRoute path={homePageLink} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
