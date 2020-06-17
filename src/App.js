import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import {history } from "./helpers/history"

function App() {
  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
