import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon } from 'utils/common-ui';
import { history } from 'utils/store';
import { logoutUser } from 'state/actions/AuthActions';
import { Side, Close, SideAvatar } from './styles';

class SideBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      name: 'Philip Hultgren'
    };
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleLogout() {
    this.props.setSideMenu();
    this.props.logoutUser();
    history.push('/auth');
  }

  handleProfile() {
    this.props.setSideMenu();
    history.push('/profile');
  }

  render() {
    return (
      <Side isActive={this.props.isActive}>
        <Close onClick={this.props.onClose}>
          <Icon name="close" />
        </Close>
        <SideAvatar
          onPress={this.handleProfile}
          user={this.props.userID !== null || '' ? this.props.userID : ''}
          isActive={true}
        />
        <Button verticalPush={16} onPress={this.handleLogout.bind(this)}>
          Log out <Icon name="lock" />
        </Button>
        <Button
          verticalPush={16}
          onPress={() => {
            this.props.history.push('/programs');
            this.props.setSideMenu();
          }}
        >
          Programs <Icon name="view_list" />
        </Button>
        <Button
          verticalPush={16}
          onPress={() => {
            history.push('/sessions');
            this.props.setSideMenu();
          }}
        >
          Sessions <Icon name="view_list" />
        </Button>
        <Button
          verticalPush={16}
          onPress={() => {
            history.push('/items');
            this.props.setSideMenu();
          }}
        >
          Exercises <Icon name="view_list" />
        </Button>
      </Side>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    loading: state.auth.loading,
    userID: state.auth.user
  }),
  mapDispatchToProps: dispatch => ({
    logoutUser: () => dispatch(logoutUser())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(SideBarContainer);

export const SideBar = withRouter(ConnectAppContainer);
