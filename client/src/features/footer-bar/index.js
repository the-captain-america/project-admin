import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Overlay } from 'features';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import mq from '@bupa-digital/shades/utils.mq';
import { history } from 'state/store';
import { withStateHandlers } from 'recompose';
import { asRem, ThemeColors, Icon, ThemeUI, Theme } from 'utils/common-ui';

const FooterContainer = shades.div({
  position: 'fixed',
  width: '100%',
  bottom: 0,
  left: 0,
  height: 'auto',
  display: 'block',
  zIndex: ThemeUI.zIndex.lg
});

const Menu = shades.button({
  position: 'absolute',
  bottom: 0,
  zIndex: 999,
  display: 'inline-block',
  marginTop: asRem(16),
  padding: `${asRem(8)} ${asRem(16)}`,
  color: ThemeColors.white,
  fontSize: asRem(16),
  fontFamily: Theme.font.defaultFamily,
  textAlign: 'center',
  lineHeight: asRem(24),
  width: ' 100%',
  boxSizing: 'border-box',
  border: 'none',
  borderBottom: '2px solid #bc3a3a',
  borderRadius: 0,
  boxShadow: '0 6px 16px 4px #777',
  background: ThemeColors.red,
  [style.prop('push')]: value => ({
    marginTop: asRem(value)
  }),
  [style.focus]: {
    outline: 'none'
  },
  [style.hover]: {
    cursor: 'pointer',
    background: ThemeColors.redDark
  }
});

const Selections = shades.ul({
  display: 'block',
  position: 'relative',
  bottom: asRem(-250),
  margin: '0 auto',
  padding: asRem(16),
  transition: 'all 0.3s ease-in-out',
  listStyle: 'none',
  background: ThemeColors.white,
  boxSizing: 'border-box',
  borderRadius: '4px',
  boxShadow: '3px 1px 6px rgba(0, 0, 0, 0.14)',
  [style.element.before]: {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: asRem(-11),
    width: 0,
    height: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '0 solid transparent',
    borderTop: '11px solid white',
    borderLeftWidth: asRem(11),
    borderRightWidth: asRem(11)
  },
  [style.prop('isActive')]: {
    bottom: asRem(64)
  },
  [mq()
    .screen()
    .from(Theme.mq.sm)]: {
    width: '90%'
  },
  [mq()
    .screen()
    .from(Theme.mq.md)]: {
    width: asRem(450)
  }
});

const Item = shades.li({
  display: 'block',
  padding: 0,
  margin: '16px 0 0 0',
  width: '100%'
});

const NavButton = shades.button({
  margin: 0,
  padding: 0,
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: Theme.font.defaultFamily,
  color: 'white',
  width: '100%',
  fontSize: asRem(16),
  borderBottom: `2px solid ${ThemeColors.redDark}`,
  background: ThemeColors.red,
  padding: asRem(16),
  [style.hover]: {
    background: ThemeColors.redDark,
    cursor: 'pointer',
    borderBottom: `2px solid ${ThemeColors.ghost}`
  },
  [style.prop('clear')]: {
    background: ThemeColors.white,
    border: '2px solid #fe4d4d',
    borderRadius: '4px',
    overflow: 'hidden',
    color: ThemeColors.red,
    [style.hover]: {
      color: 'white',
      background: ThemeColors.red,
      borderBottom: `2px solid ${ThemeColors.red}`,
      color: 'white'
    }
  }
});

const NavItem = ({ children, onPress }) => {
  return (
    <Item>
      <NavButton clear onClick={onPress}>
        {children}
      </NavButton>
    </Item>
  );
};

const footerState = withStateHandlers(
  ({ isActive = false }) => ({
    isActive
  }),
  {
    setActive: state => isActive => ({
      ...state,
      isActive
    })
  }
);

const FooterItems = ({ items }) => {
  if (!items || items.length <= 0) return <div />;
  return items.map((item, index) => {
    const itemCheck =
      item.title.length >= 0 || item.title === null || item.title === undefined;
    return (
      <React.Fragment>
        {itemCheck && (
          <NavItem key={index} clear onPress={history.push(item.link)}>
            {item.title} <Icon horizontalPush={asRem(8)} name={item.icon} />
          </NavItem>
        )}
      </React.Fragment>
    );
  });
};

const Footer = footerState(({ navItems = [], setActive, isActive }) => {
  if (!navItems || navItems.length <= 0) return;
  const selectionsRef = React.createRef();
  const baseStyle = {
    height: selectionsRef ? selectionsRef.clientHeight : 'auto'
  };
  const handleMenu = () => {
    setActive(!isActive);
  };
  const items = navItems.map((item, index) => {
    return (
      <FooterContainer key={index}>
        <div style={baseStyle} ref={selectionsRef}>
          <Selections isActive={isActive}>
            <FooterItems items={item.navItems} />
          </Selections>
        </div>
        <Menu onClick={handleMenu}>
          Options <Icon horizontalPush={8} name="flash_on" />
        </Menu>
      </FooterContainer>
    );
  });
  return (
    <React.Fragment>
      {items}
      <Overlay onPress={handleMenu} isActive={isActive} />
    </React.Fragment>
  );
});

export const FooterNav = withRouter(Footer);
