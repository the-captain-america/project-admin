import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon, Button, Section } from 'utils/common-ui';
import { FooterNav, StatusBar, Layout } from 'features';
import { programFetch } from 'state/actions/ProgramActions';
import {
  ControlGroup,
  Bookmark,
  Title,
  HeadingSmall,
  Current,
  Progress
} from './common';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusModal: false
    };
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.programFetch();
    }
  }

  renderItems() {
    const { activePrograms } = this.props;
    const items = activePrograms.map((item, index) => {
      return (
        <Section key={index} verticalPush={16}>
          <ControlGroup>
            <Bookmark isActive={item.isDefault}>
              <Icon name="bookmark" />
            </Bookmark>
          </ControlGroup>

          <Title>Program:</Title>
          <HeadingSmall>{item.name}</HeadingSmall>

          <Current>
            <Progress number={3} outOf={7} />
          </Current>
        </Section>
      );
    });
    return (
      <React.Fragment>
        {items}
        <FooterNav onPressMenu={this.handleFooter} />
      </React.Fragment>
    );
  }

  handleStatus() {
    this.setState({
      statusModal: !this.state.statusModal
    });
  }

  render() {
    return (
      <Layout basic>
        <Section>
          <h1>Do you even lift bro?</h1>
          <small>
            Add your fitness goals, exercises and tracking to "Do You Even" for
            the best results at the gym.
          </small>
        </Section>
        <StatusBar
          onClose={this.handleStatus.bind(this)}
          isActive={this.state.statusModal}
        />
        <Button verticalPush={16} onClick={this.handleStatus.bind(this)}>
          Set Status
        </Button>
        {this.renderItems()}
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
    actionsPanel: state.controls.actionPanel,
    activePrograms: state.program.activePrograms
  }),
  mapDispatchToProps: dispatch => ({
    programFetch: () => dispatch(programFetch())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(HomePage);

export default withRouter(ConnectAppContainer);
