import React from 'react';
import { history } from 'utils/store';
import { Router, Switch, Route } from 'react-router-dom';
import { Navigation } from 'features';
import { NotFound, HomePage } from './paths';

export const Routes = () => (
  <Router forceRefresh={true} history={history}>
    <Navigation>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Navigation>
  </Router>
);

//   LoginPage,
//   LandingPage,
//   ItemCreate,
//   ItemsPage,
//   ItemPage,
//   ItemEdit,
//   ProgramPage,
//   ProgramsPage,
//   ProgramCreate,
//   ProgramEdit,
//   SessionsPage,
//   CreateTrackerPage,
//   ViewHistroyPage,
//   StartPage,
//   ProfilePage,
//   SignUpPage,
// } from './pages';
/* <Route exact path="/auth" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/item-create" component={ItemCreate} />
        <Route exact path="/item-edit" component={ItemEdit} />
        <Route exact path="/items" component={ItemsPage} />
        <Route exact path="/item" component={ItemPage} />
        <Route exact path="/sessions" component={SessionsPage} />
        <Route exact path="/program-create" component={ProgramCreate} />
        <Route exact path="/program-edit" component={ProgramEdit} />
        <Route exact path="/programs" component={ProgramsPage} />
        <Route exact path="/program" component={ProgramPage} />
        <Route exact path="/tracker" component={CreateTrackerPage} />
        <Route exact path="/history" component={ViewHistroyPage} />
        <Route exact path="/start" component={StartPage} />
        <Route exact path="/profile" component={ProfilePage} /> */
