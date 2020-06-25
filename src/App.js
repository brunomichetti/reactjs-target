import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import { history } from './helpers/history';
import PrivateRoute from './helpers/private.route';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={['/', '/login']} component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
