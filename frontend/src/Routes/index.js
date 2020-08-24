import React from "react";
import Home from "../Screen/Home/Home"
import UpcomingClass from "../Screen/UpcomingClass/UpcomingClass";
import { BrowserRouter as Switch, Route } from "react-router-dom";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/upcomingclass/:user" component={UpcomingClass} />
      <Route exact path="/upcomingclass/" component={UpcomingClass} />
    </Switch>
  );
};