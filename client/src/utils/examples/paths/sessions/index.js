import React, { Component } from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FooterNav, Layout, DataItems } from 'features';
import { Push } from 'utils/common-ui';
import _ from 'lodash';
import {
  sessionFetch,
  sessionDelete,
  sessionSelected
} from 'state/actions/SessionActions';
import { Button, Icon } from 'utils/common-ui';

class SessionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      controls: false
    };
    // this.toggleControls = this.toggleControls.bind(this);
    // this.onPressDelete = this.onPressDelete.bind(this);
    // this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.sessionFetch();
    } else {
      this.props.history.push('/auth');
    }
  }

  // onPressDelete(id) {
  //   this.props.sessionDelete(id.uid);
  // }

  // toggleControls() {
  //   this.setState({
  //     controls: !this.state.controls
  //   });
  // }

  renderItems(items) {
    if (this.props.sessions.length) {
      return (
        <Push pull={64} push={0}>
          {items}
        </Push>
      );
    } else {
      return (
        <Push>
          <Button onPress={() => this.props.history.push('/session-create')}>
            Create Session <Icon name="add" />
          </Button>
        </Push>
      );
    }
  }

  onPressItem(data) {
    this.props.sessionSelected(data);
    this.props.history.push('/session');
  }

  render() {
    return (
      <Layout path="/home" title="Sessions">
        <DataItems items={this.props.sessions} editMode={this.state.controls} />
        <FooterNav
          navControls={[
            { title: 'add', link: '/session-add' },
            { title: 'edit', link: '/session-edit' },
            { title: 'delete', link: '' }
          ]}
        />
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    sessions: _.map(state.session.sessions, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    sessionFetch: () => dispatch(sessionFetch()),
    sessionDelete: id => dispatch(sessionDelete(id)),
    sessionSelected: data => dispatch(sessionSelected(data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(SessionsPage);

export default withRouter(ConnectAppContainer);
