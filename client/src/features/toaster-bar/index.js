import React, { Component } from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors, ThemeUI, Theme } from 'utils/common-ui';

const Container = shades.div({
  transition: 'bottom 0.3s ease-in-out',
  padding: asRem(16),
  display: 'block',
  background: ThemeColors.red,
  zIndex: ThemeUI.zIndex.lg,
  width: asRem(300),
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: Theme.border.defaultRadius,
  bottom: asRem(-50),
  boxShadow: `${asRem(3)} ${asRem(4)} ${asRem(14)} rgba(0, 0, 0, 0.2)`,
  [style.prop('isActive')]: {
    bottom: asRem(24)
  }
});

const Text = shades.span({
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24),
  textAlign: 'center',
  fontSize: asRem(16),
  color: 'white'
});

class ToasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      message: ''
    };
    this.toggleToaster = this.toggleToaster.bind(this);
    this.nextCloseToaster = this.nextCloseToaster.bind(this);
  }

  componentDidMount() {
    this.toggleToaster();
    this.setState({
      isActive: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isActive !== prevState.isActive) {
      clearTimeout(this.timer);

      this.setState({
        isActive: this.props.isActive
      });
    }
  }

  toggleToaster() {
    this.setState({
      isActive: !this.state.isActive,
      message: 'Copied'
    });
    this.nextCloseToaster();
  }

  nextCloseToaster() {
    this.timer = setTimeout(
      function() {
        this.setState({ isActive: false, message: '' });
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { message, isActive } = this.props;
    return (
      <Container isActive={isActive}>
        <Text>{isActive ? message : ''}</Text>
      </Container>
    );
  }
}

export { ToasterContainer };
