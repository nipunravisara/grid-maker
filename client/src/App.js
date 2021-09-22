import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GridPage from "./containers/GridPage";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/grid">
          <GridPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
