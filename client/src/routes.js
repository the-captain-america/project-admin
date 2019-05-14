import React from 'react';
import { history } from 'state/store';
import { Router, Switch, Route } from 'react-router-dom';
import { NotFound, HomePage } from './paths';

export const Routes = () => (
  <Router forceRefresh={true} history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);
