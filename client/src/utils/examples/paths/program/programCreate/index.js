import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { history } from 'utils/store';
import { connect } from 'react-redux';
import { List, Increment } from 'utils/components';
import _ from 'lodash';
import { Layout } from 'features';
import {
  Label,
  InputGroup,
  ThemeColors,
  Textarea,
  Input,
  Button,
  Icon
} from 'utils/common-ui';
import {
  programCreate,
  programFetch,
  programSetEdit
} from 'state/actions/ProgramActions';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class ProgramCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: 1,
      days: 1,
      notes: ''
    };
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.programFetch();
    } else {
      this.props.history.push('/auth');
    }
  }

  submitItem() {
    const { name, duration, days, notes } = this.state;
    const data = { name, duration, days, notes };
    this.props.programCreate(data);
    this.props.history.push('/programs');
  }

  onIncrement() {
    let duration = this.state.duration;
    duration++;
    this.setState({
      duration: duration
    });
  }

  onDecrement() {
    let duration = this.state.duration;
    duration--;
    if (this.state.duration <= 1) {
      return;
    } else {
      this.setState({
        duration
      });
    }
  }

  onIncrementDay() {
    let days = this.state.days;
    if (days === 7) {
      this.setState({
        days: 7
      });
    } else {
      this.setState({
        days: this.state.days + 1
      });
    }
  }

  onDecrementDay() {
    let days = this.state.days;
    if (days <= 1) {
      this.setState({
        days: 0
      });
    } else {
      this.setState({
        days: this.state.days - 1
      });
    }
  }

  handleAddItems() {
    this.props.programSetEdit();
    history.push('/items');
  }

  render() {
    return (
      <Layout
        path="/programs"
        basic
        asTheme={ThemeColors.grey}
        title="Create Program"
      >
        <InputGroup>
          <Label htmlFor="name">Name: </Label>
          <Input
            type="text"
            placeholder="Program name"
            name="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </InputGroup>
        <InputGroup push={16}>
          <Label>Program length (in weeks): </Label>
          <Increment
            onPressAdd={this.onIncrement.bind(this)}
            value={this.state.duration}
            onPressRemove={this.onDecrement.bind(this)}
          />
        </InputGroup>

        <InputGroup push={16}>
          <Label>How many days per week?: </Label>
          <Increment
            onPressAdd={this.onIncrementDay.bind(this)}
            value={this.state.days}
            onPressRemove={this.onDecrementDay.bind(this)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="notes">Notes: </Label>
          <Textarea
            type="text"
            id="notes"
            rows="4"
            onChange={e => this.setState(byPropKey('notes', e.target.value))}
            placeholder="Notes"
            value={this.state.notes}
          />
        </InputGroup>

        <InputGroup push={24}>
          <Label>Select exercises to add to your program</Label>
          <Button push={24} onPress={this.handleAddItems.bind(this)}>
            Add exercises <Icon name="add" />
          </Button>
        </InputGroup>

        <Button push={24} onPress={this.submitItem.bind(this)}>
          Save <Icon name="save" />
        </Button>
      </Layout>
    );
  }

  renderCards() {
    const items = this.props.groups.map((item, index) => {
      return (
        <List key={index}>
          <span>{index + 1}</span>
          <span>{item.name}</span>
        </List>
      );
    });
    return <List>{items}</List>;
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    programs: _.map(state.programs, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    programCreate: data => dispatch(programCreate(data)),
    programFetch: () => dispatch(programFetch()),
    programSetEdit: () => dispatch(programSetEdit())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ProgramCreate);

export default withRouter(ConnectAppContainer);
