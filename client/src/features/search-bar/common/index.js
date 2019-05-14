import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

export const Container = shades.div({
  height: '100%',
  top: 'calc(-100% - 20px)',
  position: 'fixed',
  transition: 'all 0.3s ease-in-out',
  left: 0,
  width: '100%',
  background: 'white',
  overflow: 'hidden',
  boxSizing: 'borderBox',
  [style.prop('isActive')]: {
    top: 0
  }
});

export const InputContainer = shades.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  background: ThemeColors.white,
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  boxSizing: 'borderBox'
});

export const Close = shades.div({
  width: '100%',
  height: asRem(40),
  background: ThemeColors.white,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const CloseButton = shades.button({
  border: 'none',
  background: 'none',
  transform: 'rotate(90deg)',
  [style.prop('isActive')]: {
    transform: 'rotate(-90deg)'
  },
  padding: asRem(8),
  lineHeight: asRem(24),
  [style.focus]: {
    border: 'none'
  }
});

export const List = shades.li({
  width: '100%',
  margin: 0,
  listStyle: 'none'
});

export const ListItem = shades.a({
  padding: asRem(16),
  background: ThemeColors.white,
  display: 'block',
  color: ThemeColors.red,
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(16),
  textAlign: 'left',
  borderBottom: `1px solid ${ThemeColors.red}`,
  [style.hover]: {
    background: ThemeColors.red,
    color: ThemeColors.white
  }
});

export const Group = shades.ul({
  width: '100%',
  listStyle: 'none',
  margin: 0,
  padding: 0
});

export const Input = shades.input({
  width: '100%',
  height: asRem(40),
  margin: 0,
  padding: 0,
  border: 0,
  marginTop: asRem(24),
  fontSize: asRem(16),
  lineHeight: asRem(24),
  paddingLeft: asRem(16),
  marginLeft: asRem(24),
  margin: 0,
  boxSizing: 'border-box',
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  fontFamily: Theme.font.defaultFamily,
  borderBottom: `2px solid ${ThemeColors.redDark}`,
  [style.focus]: {
    outline: 'none'
  }
});
