import React from "react";
import landingpage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import events from "./events";
import media from "./media";
// import volunteer from "./volunteer";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    <Route path="/events" component={events} />
    <Route path="/media" component={media} />
    {/* <Route path="/volunteer" component={volunteer} /> */}
    <Route path="/volunteer" component={() => { window.location = 'https://docs.google.com/forms/d/1TyabJOY_xmNMaFmoBhJ6mVmGXI5gvfqb5SQvdBGRiV0/viewform?chromeless=1&edit_requested=true'; return null;} }/>
    <Route path="/register" component={() => { window.location = 'https://liberationnyc-register.eventbrite.com'; return null;} }/>
    <Route path="/alcnyc" component={() => { window.location = 'https://facebook.com/events/s/animal-liberation-nyc-conferen/385663858818195/?ti=cl'; return null;} }/>
  </Switch>
)

export default Main;