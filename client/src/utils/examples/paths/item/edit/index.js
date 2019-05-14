import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from 'utils/store';
import _ from 'lodash';
import { itemFetch, itemUpdate } from 'state/actions/ItemActions';
import { withRouter } from 'react-router-dom';
import { Layout, SelectGroup } from 'features';
import {
  Label,
  Input,
  Textarea,
  Push,
  InputGroup,
  Button,
  Icon
} from 'utils/common-ui';
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class ItemCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sets: '',
      reps: '',
      load: '',
      error: '',
      happy: 1,
      notes: '',
      muscles: [],
      type: '',
      muscleGroups: [
        { value: 'Chest' },
        { value: 'Back' },
        { value: 'Quad' },
        { value: 'Ham' },
        { value: 'Delts' },
        { value: 'Bicep' },
        { value: 'Tricep' },
        { value: 'Abs' },
        { value: 'Glutes' }
      ]
    };
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.itemFetch();
      const { selectedItem } = this.props;
      this.setState({
        muscles: this.props.selected,
        name: selectedItem.name ? selectedItem.name : '',
        sets: selectedItem.sets ? selectedItem.sets : 0,
        reps: selectedItem.reps ? selectedItem.reps : 0,
        load: selectedItem.load ? selectedItem.load : 0,
        notes: selectedItem.notes ? selectedItem.notes : ''
      });
    } else {
      this.props.history.push('/auth');
    }
  }

  componentDidUpdate(prevProps) {
    console.log('component did update', this.props.selected);
    if (this.props.selected !== prevProps.selected) {
      this.props.itemFetch();
      const { selectedItem } = this.props;
      this.setState({
        muscles: this.props.selected,
        name: selectedItem.name,
        sets: selectedItem.sets,
        reps: selectedItem.reps,
        load: selectedItem.load,
        notes: selectedItem.notes
      });
    }
  }

  submitItem() {
    const { name, sets, reps, load, type, muscles, notes } = this.state;
    const data = { name, sets, reps, load, type, muscles, notes };
    this.props.itemUpdate(this.props.selectedItem.uid, data);
    history.push('/items');
  }

  handleReset() {
    this.setState({
      error: ''
    });
  }

  render() {
    return (
      <Layout path="/items" title="Edit Exercise">
        <InputGroup>
          <Label htmlFor="name">Exercise: </Label>
          <Input
            type="text"
            id="name"
            value={this.state.name}
            onChange={e => this.setState(byPropKey('name', e.target.value))}
            placeholder="Exercise"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="username">Sets: </Label>
          <Input
            type="text"
            onChange={e => this.setState(byPropKey('sets', e.target.value))}
            placeholder="Sets"
            value={this.state.sets}
            pattern="[0-9]*"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="username">Reps: </Label>
          <Input
            type="text"
            value={this.state.reps}
            id="reps"
            onChange={e => this.setState(byPropKey('reps', e.target.value))}
            placeholder="Reps"
            pattern="[0-9]*"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="load">Load: </Label>
          <Input
            type="text"
            id="load"
            value={this.state.load}
            onChange={e => this.setState(byPropKey('load', e.target.value))}
            placeholder="Load"
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="load">Type: </Label>
          <Input
            type="text"
            id="type"
            onChange={e => this.setState(byPropKey('type', e.target.value))}
            placeholder="Type"
            value={this.state.type}
          />
        </InputGroup>
        <InputGroup>
          <Push verticalPush={24}>
            <Label htmlFor="load">Select Muscle Groups: </Label>
            <SelectGroup
              placeholder="Select muscle groups"
              options={this.state.muscleGroups}
              multiple
            />
          </Push>
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
        <Button onPress={this.submitItem.bind(this)}>
          Update <Icon color="white" name="save" />
        </Button>
      </Layout>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    selected: state.select.items,
    selectedItem: state.item.selectedItem,
    items: _.map(state.item.items, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    itemFetch: () => dispatch(itemFetch()),
    itemUpdate: (id, data) => dispatch(itemUpdate(id, data))
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ItemCreate);

export default withRouter(ConnectAppContainer);
