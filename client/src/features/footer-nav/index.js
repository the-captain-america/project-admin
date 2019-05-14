import React, { Component } from 'react';
import { asRem, Icon, ThemeColors, Theme } from 'utils/common-ui';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import mq from '@bupa-digital/shades/utils.mq';

const Container = shades.div({
  position: 'fixed',
  left: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  height: asRem(48),
  transition: 'all 0.3s easeIn-out',
  bottom: asRem(-40),
  [style.prop('isActive')]: {
    bototm: 0
  },
  [mq()
    .screen()
    .from(Theme.mq.xl)]: {
    position: 'relative',
    justifyContent: 'space-between',
    background: ThemeColors.red,
    borderRadius: 0,
    overflow: 'hidden',
    borderTopRightRadius: asRem(4),
    borderTopLeftRadius: asRem(4),
    position: 'fixed',
    left: asRem(24),
    justifyContent: 'space-between',
    background: '#fe4d4d',
    borderRadius: 0,
    width: 'auto',
    top: asRem(64),
    height: asRem(100),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopRightRadius: asRem(4),
    borderTopLeftRadius: asRem(4),
    borderRadius: Theme.border.defaultRadius,
    overflow: 'hidden'
  }
});

const Item = shades.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifycontent: 'center',
  alignitems: 'center',
  textAlign: 'center',
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(14),
  background: ThemeColors.red,
  color: 'white',
  [style.hover]: {
    background: ThemeColors.redDark,
    cursor: 'pointer'
  },
  [mq()
    .screen()
    .from(Theme.mq.xl)]: {
    paddingLeft: asRem(16),
    paddingRight: asRem(16),
    color: ThemeColors.white,
    height: '100%',
    width: 'auto',
    [style.hover]: {
      color: ThemeColors.white
    }
  }
});

export class FooterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primary: false,
      secondary: false
    };
  }

  componentDidMount() {
    if (this.props.items === 1) {
      this.setState({
        primary: true,
        secondary: false
      });
    } else if (this.props.items === 2) {
      this.setState({
        primary: true,
        secondary: true
      });
    }
  }
  render() {
    return (
      <Container isActive={this.props.isActive}>
        {this.state.primary ? (
          <Item onClick={this.props.onPressPrimary}>
            {this.props.primaryText} <Icon name={this.props.primaryIcon} />
          </Item>
        ) : (
          ''
        )}
        {this.state.secondary ? (
          <Item onClick={this.props.onPressSecondary}>
            {this.props.secondaryText}
            <Icon name={this.props.secondaryIcon} />
          </Item>
        ) : (
          ''
        )}
      </Container>
    );
  }
}
