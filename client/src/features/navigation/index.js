import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import mq from '@bupa-digital/shades/utils.mq';
import { history } from 'utils/store';
import {
  asRem,
  FlexBlock,
  baseButtonStyles,
  IconSvg,
  ThemeColors,
  Theme
} from 'utils/common-ui';

const Container = FlexBlock.extend({
  position: 'fixed',
  bottom: 0,
  height: asRem(64),
  background: ThemeColors.red
});

const navConfig = {
  width: '64',
  height: '72'
};

const Button = shades.button({
  ...baseButtonStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: navConfig.width,
  width: navConfig.height,
  border: 'none',
  color: ThemeColors.white,
  [style.hover]: {
    cursor: 'pointer',
    background: ThemeColors.redDark
  },
  [style.focus]: {
    outline: 'none'
  }
});

const IconItem = shades.span({});
const Title = shades.span({});

const Link = ({ to = '/', children }) => (
  <Button onClick={() => history.push(to ? to : '/')}>{children}</Button>
);

const navItems = [
  { title: 'Health', path: '/home', icon: '', image: '' },
  { title: 'Training', path: '/home', icon: '', image: '' },
  { title: 'Nutrition', path: '/home', icon: '', image: '' },
  { title: 'Goals', path: '/home', icon: '', image: '' },
  { title: 'Profile', path: './home', icon: 'account', image: '' }
];

const Buttons = () => {
  return navItems.map((item, index) => {
    return (
      <Link key={index} to={item.path}>
        <Title>{item.title}</Title>
        <IconItem>
          <IconSvg name={item ? item.icon : 'home'} />
        </IconItem>
      </Link>
    );
  });
};

export const Navigation = () => {
  return (
    <Container>
      <Buttons />
    </Container>
  );
};
