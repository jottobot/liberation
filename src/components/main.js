import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import events from "./events";
import media from "./media";
import volunteer from "./volunteer";
import contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/events" component={events} />
    <Route path="/media" component={media} />
    <Route path="/volunteer" component={volunteer} />
    <Route path="/contact" component={contact} />
  </Switch>
)

export default Main;