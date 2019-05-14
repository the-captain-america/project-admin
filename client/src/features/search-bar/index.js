import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'utils/components';
import { withRouter } from 'react-router-dom';
import { Icon } from 'utils/common-ui';
import { setOverlay } from 'state/actions/ControlActions';
import {
  List,
  Group,
  Container,
  Close,
  Input,
  CloseButton,
  ListItem,
  InputContainer
} from './common';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: 'arms' }, { name: 'legs' }],
      list: undefined,
      menu: false
    };
  }

  componentDidMount() {
    if (this.props.data) {
      console.log('there is life');
      this.setState({
        data: this.props.data
      });
    }
  }

  componentWillUnmount() {
    // this.props.setOverlay();
  }

  //   toggleMenu() {
  //     this.setState({
  //       menu: !this.state.menu
  //     });
  //   }

  searchData(e) {
    var queryData = [];
    if (e.target.value !== '') {
      this.state.data.forEach(item => {
        if (item.name.toLowerCase().indexOf(e.target.value) !== -1) {
          if (queryData.length < 10) {
            queryData.push(item);
          }
        }
      });
    }
    this.setState({ list: queryData });
  }
  render() {
    // console.log('props from root', this.props.data);
    return (
      <SearchBarContainer
        onPressClose={this.props.onPressClose}
        isActive={this.props.isActive}
        search={this.searchData.bind(this)}
      >
        {this.state.list ? <SearchResult data={this.state.list} /> : null}
      </SearchBarContainer>
    );
  }
}

class SearchResult extends React.Component {
  render() {
    const items = this.props.data.map((item, index) => {
      return (
        <List key={index}>
          <ListItem href="">
            <span>{item.name}</span>
          </ListItem>
        </List>
      );
    });
    return <Group>{items}</Group>;
  }
}

const SearchBarContainer = ({ isActive, onPressClose, search, children }) => {
  return (
    <Container isActive={isActive}>
      <Close>
        <CloseButton isActive={isActive} onClick={onPressClose}>
          <Icon name="chevron_right" />
        </CloseButton>
      </Close>
      <Row>
        <Col sm={12} md={12} lg={4} offset={{ lg: 4 }}>
          <InputContainer>
            <Input
              className="search"
              onChange={search}
              name="query"
              type="text"
              placeholder="Enter search"
              id="query"
            />
            {children}
          </InputContainer>
        </Col>
      </Row>
    </Container>
  );
};

// Map dispatch to props
const connectApp = {
  // mapStateToProps: state => ({
  //   overlay: state.controls.overlay
  // }),
  mapDispatchToProps: dispatch => ({
    setOverlay: () => dispatch(setOverlay())
  })
};

const ConnectAppContainer = connect(
  null,
  connectApp.mapDispatchToProps
)(SearchContainer);

export const SearchBar = withRouter(ConnectAppContainer);
