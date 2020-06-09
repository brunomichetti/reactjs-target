import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Router>
        <Switch>
          <Route path={["/", "/login"]}>
            <LoginPage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
