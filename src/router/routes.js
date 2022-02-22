import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import AboutMe from '../pages/aboutMe/AboutMe';
import Resume from '../pages/resume/Resume';
import Works from '../pages/works/Works';

export default function RouteRenderer() {
  return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/works" component={Works} />
        <Redirect to="/" />
      </Switch>
  );
}