import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser, clearError } from 'state/actions/AuthActions';
import { ListGroup, List } from './styles';
import { ErrorItem, Spinner } from 'utils/components';
import { Layout } from 'features';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import {
  AuthLabel,
  Input,
  Section,
  InputGroup,
  asRem,
  ThemeColors,
  Button,
  Label
} from 'utils/common-ui';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/home');
    }
    this.setState({
      loading: false,
      email: '',
      error: '',
      password: ''
    });
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn, error } = nextProps;
    if (loggedIn) {
      const token = { email: this.state.email, password: this.state.password };
      localStorage.setItem('customerToken', JSON.stringify(token));
      this.props.history.push('/home');
    } else {
      if (error) {
        this.setState({
          error: error
        });
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  handleSubmit() {
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  escapeAuth() {
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  renderHelper() {
    const Developer = shades.button({
      bottom: asRem(-44),
      padding: asRem(16),
      color: 'white',
      background: ThemeColors.red,
      border: 'none',
      cursor: 'pointer',
      display: 'block',
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: asRem(100),
      borderBottomLeftRadius: asRem(4),
      borderBottomRightRadius: asRem(4),
      [style.hover]: {
        background: ThemeColors.redDark
      }
    });

    return (
      <Developer
        onClick={() =>
          this.setState({
            email: 'philip.ronald.hultgren@gmail.com',
            password: 'password'
          })
        }
      >
        DEVELOPER
      </Developer>
    );
  }

  renderSpinner() {
    return (
      <div>
        <Button
          icon="lock"
          loading={this.props.loading}
          isActive={this.state.password && this.state.email}
          onPress={this.handleSubmit}
        >
          Login
        </Button>
        <Spinner loading={this.props.loading} />
      </div>
    );
  }

  render() {
    return (
      <Layout basic title="">
        <form onSubmit={e => this.onSubmit(e)}>
          <Section verticalPush={24}>
            <AuthLabel>Login</AuthLabel>
            <ErrorItem
              isActive={this.props.error}
              onPress={() => this.props.clearError()}
            />
            <ListGroup>
              <List>
                <InputGroup>
                  <Label htmlFor="username">Username: </Label>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="username"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </InputGroup>
              </List>
              <List>
                <InputGroup>
                  <Label htmlFor="title">Password: </Label>
                  <Input
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                  />
                </InputGroup>
              </List>
              <List>
                <Button
                  icon="lock"
                  verticalPush={16}
                  loading={this.props.loading}
                  isActive={this.state.password && this.state.email}
                  onPress={this.handleSubmit}
                >
                  Login
                </Button>
              </List>
            </ListGroup>
          </Section>
          {this.renderHelper()}
        </form>
      </Layout>
    );
  }
}

// Map state to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error
  }),
  mapDispatchToProps: dispatch => ({
    loginUser: data => dispatch(loginUser(data)),
    clearError: () => dispatch(clearError())
  })
};

// Map dispatch to props
const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(LoginPage);

export default withRouter(ConnectAppContainer);
