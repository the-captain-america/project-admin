import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'utils/components';
import { trackerFetch } from 'state/actions/TrackerActions';
// import {
//   Timeline,
//   TimelineBlock,
//   TimelineContent,
//   TimelineDate,
//   TimelineImage
// } from './styles';
import { Button, Content, Icon } from 'utils/common-ui';

class TrackerPage extends Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.trackerFetch();
    } else {
      this.props.history.push('/auth');
    }
  }

  renderButton() {
    return (
      <Button onPress={() => this.props.history.push('/tracker')}>
        Add entry <Icon name="add" />
      </Button>
    );
  }

  // renderItems() {
  //   const itemObj = this.props.items;
  //   const keys = Object.keys(itemObj);
  //   const items = keys.map((id, index) => {
  //     const currentItem = itemObj[id];
  //     return (
  //       <TimelineBlock key={index}>
  //         <TimelineImage>
  //           <Icon name="place" />
  //         </TimelineImage>
  //         <TimelineContent className="timeline-content">
  //           <h2>{currentItem.weight}</h2>
  //           <TimelineDate className="timeline-date">
  //             {currentItem.date}
  //           </TimelineDate>
  //         </TimelineContent>
  //       </TimelineBlock>
  //     );
  //   });
  //   return <Timeline>{items}</Timeline>;
  // }

  render() {
    return (
      <Row>
        <Col sm={12} md={12} lg={4} offset={{ lg: 4 }}>
          <Content>
            <h1>Your fitness history</h1>
            <p>
              Below you can start by adding an entry and watch as you see you
              progress unfold over time.
            </p>
          </Content>
          {this.renderButton()}
          {/* {this.renderItems()} */}
        </Col>
      </Row>
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    loggedIn: state.auth.loggedIn,
    items: _.map(state.history.items, (val, uid) => {
      return { ...val, uid };
    })
  }),
  mapDispatchToProps: dispatch => ({
    trackerFetch: () => dispatch(trackerFetch())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(TrackerPage);

export default withRouter(ConnectAppContainer);
