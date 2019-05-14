import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class RouteAuth extends Component {
    render() {
      let { canAccess, component, path, name, exact, strict } = this.props;
      let routeProps = {
        path,
        component,
        name,
        exact,
        strict
      };
      return canAccess ? <Route {...routeProps} /> : <Redirect to="/auth" />
    }
  }

  export default RouteAuth;
  
  RouteAuth.propTypes = {
    canAccess: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    strict: PropTypes.bool.isRequired,
  };