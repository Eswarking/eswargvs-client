import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import AboutMe from '../pages/aboutMe/AboutMe';

export default function RouteRenderer() {
  return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Redirect to="/" />
      </Switch>
  );
}