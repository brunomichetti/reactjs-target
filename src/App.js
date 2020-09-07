import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import SignUpPage from 'pages/SignUpPage';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import { history } from 'helpers/history';
import PrivateRoute from 'helpers/private.route';
import {
  homePageLink,
  loginPageLink,
  signupPageLink,
  resetPasswordLink,
} from 'constants/link.constants';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={['/', loginPageLink]} component={LoginPage} />
      <Route exact path={signupPageLink} component={SignUpPage} />
      <Route exact path={resetPasswordLink} component={ResetPasswordPage} />
      <PrivateRoute exact path={homePageLink} comp={HomePage} />
    </Switch>
  </Router>
);

export default App;
