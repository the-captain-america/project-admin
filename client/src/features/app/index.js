import React from 'react';
import { HeaderBar } from 'features';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from 'state/actions/AuthActions';
import { Overlay } from 'features';
import { lifecycle } from 'recompose';
import { Push } from 'utils/common-ui';
import { Container } from 'utils/components';

const App = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderBar />
      <Push verticalPush={64}>
        <Container>{children}</Container>
      </Push>
      <Overlay />
    </React.Fragment>
  );
};

export const AppLife = lifecycle({
  componentDidMount() {
    console.log('app life');
    if (!this.props.loggedIn) {
      this.props.history.push('/auth');
      const getCredentials = JSON.parse(localStorage.getItem('customerToken'));
      if (
        getCredentials !== null ||
        undefined ||
        getCredentials.password.length > 0
      ) {
        this.props.loginUser(getCredentials);
      }
    } else {
      this.setState({
        loggedIn: this.props.loggedIn
      });
    }
  },
  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn) {
      if (this.props.loggedIn) {
        console.log('updated');
        this.props.history.push('/auth');
      }
    }
  }
})(App);

const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn
  }),
  mapDispatchToProps: dispatch => ({
    loginUser: data => dispatch(loginUser(data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(AppLife);

export const AppContainer = withRouter(ConnectAppContainer);
