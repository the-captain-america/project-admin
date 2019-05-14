import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, changePassword } from 'state/actions/ProfileActions';
import { Row, Col } from 'utils/components';
import { UploadBar } from 'features';
import {
  Label,
  Heading,
  InputGroup,
  Button,
  Section,
  Push,
  Input,
  Icon
} from 'utils/common-ui';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      displayName: '',
      email: ''
    };
    this.updateUser = this.updateUser.bind(this);
    this.handleAdvanced = this.handleAdvanced.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      // console.log('user', this.props.user);
      this.setState({
        displayName: this.props.user.displayName || '',
        password: '',
        email: this.props.user.email || ''
      });
    } else {
      this.props.history.push('/auth');
    }
  }

  updateUser() {
    const { displayName, email, password } = this.state;
    this.props.updateUser({ displayName, email, password });
  }

  handlePassword() {
    const { password } = this.state;
    this.props.changePassword(password);
    this.props.history.push('/auth');
  }

  handleAdvanced() {
    this.setState({
      advanced: !this.state.advanced
    });
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={12} lg={4} offset={{ lg: 4 }}>
          <Section>
            <Heading>Complete your profile</Heading>
            <UploadBar image={this.props.user} />
            <InputGroup>
              <Label htmlFor="fullName">Full name: </Label>
              <Input
                type="text"
                value={this.state.displayName}
                placeholder="Full name"
                onChange={e => this.setState({ displayName: e.target.value })}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="fullName">Email: </Label>
              <Input
                type="text"
                value={this.state.email}
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </InputGroup>

            <Button verticalPush={16} onPress={this.updateUser}>
              {this.props.user && this.props.user.displayName
                ? 'Update'
                : 'Save'}{' '}
              <Icon name="save" />
            </Button>

            <Push verticalPush={24}>
              <Heading>Change your password</Heading>
              <InputGroup>
                <Label htmlFor="password">New password: </Label>
                <Input
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </InputGroup>
              <Button verticalPush={16} onPress={this.handlePassword}>
                Save <Icon name="save" />
              </Button>
            </Push>
            {/* <ToasterContainer
              isActive={this.state.toaster}
              message="Profile name has been updated."
            /> */}
          </Section>
        </Col>
      </Row>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
  }),
  mapDispatchToProps: dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    changePassword: password => dispatch(changePassword(password))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ProfilePage);

export default withRouter(ConnectAppContainer);
