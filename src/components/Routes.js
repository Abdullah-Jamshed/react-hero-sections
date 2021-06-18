import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Section3 from "../pages/Section3";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Redirect to='hero1' />} />
        <Route path='/hero1' component={Section1} />
        <Route path='/hero2' component={Section2} />
        <Route path='/hero3' component={Section3} />
      </Switch>
    </Router>
  );
};

export default Routes;
