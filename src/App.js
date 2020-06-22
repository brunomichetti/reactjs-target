import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import {history } from "./helpers/history"
import PrivateRoute from "./helpers/private.route";

const App = () => {
  return (
    <Router history={history}>
        <Switch>
            <Route exact path={["/", "/login"]} component={LoginPage}></Route>
            <PrivateRoute path="/home" comp={HomePage}></PrivateRoute>
        </Switch>
    </Router>
  );
}

export default App;
