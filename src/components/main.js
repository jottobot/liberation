import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import events from "./events";
import media from "./media";
import volunteer from "./volunteer";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/events" component={events} />
    <Route path="/media" component={media} />
    <Route path="/volunteer" component={volunteer} />
  </Switch>
)

export default Main;