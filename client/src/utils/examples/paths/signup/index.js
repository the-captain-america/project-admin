import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from 'state/actions/ProfileActions';
import { ErrorItem, Spinner } from 'utils/components';
import { Layout } from 'features';
import { Label, Section, Input, InputGroup, Button } from 'utils/common-ui';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: ''
    };
    this.onSignup = this.onSignup.bind(this);
  }

  componentDidMount() {
    console.log('loading', this.props.loading);
    if (this.props.loggedIn) {
      this.props.history.push('/home');
    }
    this.setState({
      email: 'philip.ronald.hultgren@gmail.com',
      password: 'password'
    });
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps;
    if (loggedIn === true) {
      this.props.history.push('/home');
    } else {
      return;
    }
  }

  onSignup() {
    const { email, password } = this.state;
    this.props.registerUser({ email, password });
    this.props.history.push('/auth');
  }

  renderSpinner() {
    if (this.props.loading) {
      return <Spinner loading={this.props.loading} />;
    } else {
      return (
        <Button icon="person" type="button" onPress={this.onSignup}>
          Sign up
        </Button>
      );
    }
  }

  render() {
    return (
      <Layout title="Sign Up" path="/home">
        <Section verticalPush={48}>
          <ErrorItem
            isActive={this.props.error}
            onPress={() => console.log('clicked clear')}
          />
          <InputGroup>
            <Label htmlFor="username">Username: </Label>
            <Input
              type="text"
              placeholder=""
              name="username"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="title">Password: </Label>
            <Input
              type="password"
              placeholder=""
              name="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </InputGroup>
          {this.renderSpinner()}
        </Section>
      </Layout>
    );
  }
}

// Map state to props
const connectApp = {
  mapStateToProps: state => ({
    user: state.auth.user,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }),
  mapDispatchToProps: dispatch => ({
    registerUser: user => dispatch(registerUser(user))
    // clearError: () => dispatch(clearError())
  })
};

// Map dispatch to props
const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(Signup);

export default withRouter(ConnectAppContainer);
