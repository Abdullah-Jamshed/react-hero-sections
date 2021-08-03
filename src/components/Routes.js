import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Section3 from "../pages/Section3";
import Section4 from "../pages/Section4";
import Section5 from "../pages/Section5";
import Section6 from "../pages/Section6";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Redirect to='hero1' />} />
        <Route path='/about' component={About} />
        <Route path='/hero1' component={Section1} />
        <Route path='/hero2' component={Section2} />
        <Route path='/hero3' component={Section3} />
        <Route path='/hero4' component={Section4} />
        <Route path='/hero5' component={Section5} />
        <Route path='/hero6' component={Section6} />
      </Switch>
    </Router>
  );
};

export default Routes;
