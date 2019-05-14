import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'features';
import { Button, Section, Content, Icon } from 'utils/common-ui';

class StartPage extends Component {
  componentDidMount() {
    if (this.props.loggedIn) {
    } else {
      this.props.history.push('/auth');
    }
  }

  render() {
    return (
      <Layout title="let's begin" path="/home">
        <Section>
          <Content>
            <h1>Let's begin!</h1>
            <p>
              First, let's create some exercises. Once you have some exercises,
              you can then create a program that incorporates any of your custom
              made exercises.{' '}
            </p>
          </Content>
          <Button
            push={0}
            onPress={() => this.props.history.push('/item-create')}
          >
            Add exercises <Icon name="add" />
          </Button>
        </Section>
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    items: state.item.items,
    programs: state.program.programs
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  null
)(StartPage);

export default withRouter(ConnectAppContainer);
