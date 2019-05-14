import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { history } from 'utils/store';
import { connect } from 'react-redux';
import { Increment } from 'utils/components';
import {
  Label,
  Icon,
  Input,
  InputGroup,
  ThemeColors,
  Button
} from 'utils/common-ui';
import _ from 'lodash';
import { Layout } from 'features';
import {
  programFetch,
  programUpdate,
  programSetEdit
} from 'state/actions/ProgramActions';

class ProgramEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      duration: 1,
      days: 1
    };
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.programFetch();
      const { selectedProgram } = this.props;
      this.setState({
        name: selectedProgram.name ? selectedProgram.name : 'No name set',
        duration: selectedProgram.duration ? selectedProgram.duration : 1,
        days: selectedProgram.days ? selectedProgram.days : 1
      });
    } else {
      this.props.history.push('/auth');
    }
  }

  submitItem() {
    const { name, duration, days } = this.state;
    const data = { name, duration, days };
    this.props.programUpdate(this.props.selectedProgram.uid, data);
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

  render() {
    return (
      <Layout
        path="/programs"
        basic
        asTheme={ThemeColors.grey}
        title="Edit Program"
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

        <InputGroup push={24}>
          <Label>Select exercises to add to your program</Label>
          <Button push={24} onPress={() => history.push('/items')}>
            Add Sessions <Icon name="add" />
          </Button>
        </InputGroup>

        <Button push={24} onPress={this.submitItem.bind(this)}>
          Save <Icon name="save" />
        </Button>
      </Layout>
    );
  }
}

/*
  create action called programSet
  this is a function which toggles a boolean
  this boolean will be picked up by the /programs
  /programs will render each item with a checkbox
  each checkbox upon checked will add item's unique key
  to an array object stored in local component state.

  2. Button appears from bottom of screen (FooterNavContainer) or similar
  which has a button called "Add to Program"
  3. Upon clicking, items within array are sent to new actionCreator called:
  PROGRAM_SET = 'PROGRAM_SET';
  programSet: () => dispatch(programSet())

  const PROGRAM_SET_ITEMS = 'PROGRAM_SET_ITEMS';
  const PROGRAM_GET_ITEMS = 'PROGRAM_GET_ITEMS';
  const PROGRAM_FETCH_ITEMS = 'PROGRAM_FETCH_ITEMS';
  const PROGRAM_SAVE_ITEMS = 'PROGRAM_SAVE_ITEMS';

  Add reducer which stores the array. Items must be able to be queried from 
  this.props.programItems (from combineReducers)


  After clicking user is sent back to the "selectedProgram" item edit page (/program-edit)
  They continue editing the page.
*/

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    programs: _.map(state.program.programs, (val, uid) => {
      return { ...val, uid };
    }),
    selectedProgram: state.program.selectedProgram
  }),
  mapDispatchToProps: dispatch => ({
    programFetch: () => dispatch(programFetch()),
    programSetEdit: () => dispatch(programSetEdit()),
    programUpdate: (id, data) => dispatch(programUpdate(id, data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ProgramEdit);

export default withRouter(ConnectAppContainer);
