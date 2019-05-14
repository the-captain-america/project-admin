import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FooterNav } from 'features';
import { Push } from 'utils/common-ui';
import _ from 'lodash';
import {
  programFetch,
  programDelete,
  programSelected
} from 'state/actions/ProgramActions';
import { Layout, DeleteControl } from 'features';
import { Button, Icon } from 'utils/common-ui';

class ProgramsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      controls: false
    };
    this.toggleControls = this.toggleControls.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.programFetch();
    } else {
      this.props.history.push('/auth');
    }
  }

  onPressDelete(id) {
    this.props.programDelete(id.uid);
  }

  onPressItem(data) {
    this.props.programSelected(data);
    this.props.history.push('/program');
  }

  toggleControls() {
    this.setState({
      controls: !this.state.controls
    });
  }

  renderItems(items) {
    if (this.props.programs.length) {
      return (
        <Push pull={64} push={0}>
          {items}
        </Push>
      );
    } else {
      return (
        <Push>
          <Button onPress={() => this.props.history.push('/program-create')}>
            Create Program <Icon name="add" />
          </Button>
        </Push>
      );
    }
  }

  render() {
    return (
      <Layout title="Programs" path="/home">
        {/* {this.renderItems(items)} */}
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    programs: _.map(state.program.programs, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    programFetch: () => dispatch(programFetch()),
    programDelete: id => dispatch(programDelete(id)),
    programSelected: data => dispatch(programSelected(data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ProgramsPage);

export default withRouter(ConnectAppContainer);
