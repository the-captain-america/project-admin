import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { history } from 'utils/store';
import { itemCreate, itemFetch } from 'state/actions/ItemActions';
import { Layout } from 'features';
import {
  Label,
  Heading,
  Push,
  Textarea,
  Section,
  InputGroup,
  Button,
  Input,
  Icon
} from 'utils/common-ui';
import { withRouter } from 'react-router-dom';
import { SelectGroup } from 'features';
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
      reg: false,
      error: '',
      step: 1,
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
      this.setState({
        muscles: this.props.selected
      });
    } else {
      this.props.history.push('/auth');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selected !== prevProps.selected) {
      this.setState({
        muscles: this.props.selected
      });
    }
  }

  submitItem() {
    const { name, sets, reps, load, type, notes } = this.state;
    const muscles = this.props.selected;
    const data = { name, sets, reps, load, type, muscles, notes };
    this.props.itemCreate(data);
    history.push('/items');
  }

  handleReset() {
    this.setState({
      error: '',
      reg: true
    });
  }

  // renderBack() {
  //   return (
  //     <Controls>
  //       <Edit push={0} onClick={() => history.push('/items')}>
  //         <Icon name="arrow_back" /> Back to list
  //       </Edit>
  //     </Controls>
  //   );
  // }

  render() {
    return (
      <Layout basic title="Create Exercise">
        <Section verticalPush={8}>
          <InputGroup>
            <Push verticalPush={24}>
              <Label htmlFor="load">Select Muscle Groups: </Label>
              <SelectGroup
                placeholder="Select muscle groups"
                options={this.state.muscleGroups}
                multiple
              />
              <select style={{ display: 'none' }}>
                {this.state.muscleGroups.map((item, index) => {
                  return <option key={index}>{item.value}</option>;
                })}
              </select>
            </Push>
          </InputGroup>

          <Button onPress={submitItem}>
            Create <Icon color="white" name="save" />
          </Button>
        </Section>
      </Layout>
    );
  }
}

const FieldItem = ({ onChange, value, placeholder, id, title }) => {
  return (
    <InputGroup>
      <Label htmlFor={id}>{title}</Label>
      <Input
        type="text"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </InputGroup>
  );
};

const textItem = ({ onChange, value, placeholder, id, title }) => {
  return (
    <InputGroup>
      <Label htmlFor={id}>{title} </Label>
      <Textarea
        type="text"
        id={id}
        rows="4"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </InputGroup>
  );
};

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    selected: state.select.items,
    items: _.map(state.item.items, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    itemCreate: data => dispatch(itemCreate(data)),
    itemFetch: () => dispatch(itemFetch())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(ItemCreate);

export default withRouter(ConnectAppContainer);
