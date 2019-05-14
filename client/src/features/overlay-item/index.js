import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setOverlay } from 'state/actions/ControlActions';
import { OverlayItem } from './common';

class OverlayContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay() {
    this.props.setOverlay();
  }

  render() {
    return (
      <OverlayItem
        stack={100}
        isActive={this.props.overlay}
        onClick={this.handleOverlay}
      />
    );
  }
}

// Map dispatch to props
const connectApp = {
  mapStateToProps: state => ({
    overlay: state.controls.overlay
  }),
  mapDispatchToProps: dispatch => ({
    setOverlay: () => dispatch(setOverlay())
  })
};

const ConnectAppContainer = connect(
  connectApp.mapStateToProps,
  connectApp.mapDispatchToProps
)(OverlayContainer);

export const Overlay = ConnectAppContainer;
