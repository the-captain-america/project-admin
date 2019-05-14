import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

// export const FlexItem = shades.div({
//   padding: '5px',
//   width: asRem(20),
//   height: asRem(20),
//   margin: '10px',
//   lineHeight: '20px',
//   color: 'white',
//   fontWeight: 'bold',
//   fontSize: '2em',
//   textAlign: 'center'
// });

export const ListGroup = shades.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

export const List = shades.li({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  width: '100%'
});

export const Button = shades.button({
  position: 'relative',
  top: 0,
  marginTop: asRem(8),
  height: asRem(48),
  color: ThemeColors.white,
  cursor: 'pointer',
  transition: '300ms ease all',
  border: 'none',
  borderRadius: Theme.border.defaultRadius,
  boxShadow: `0px 4px 0px 0px ${ThemeColors.redDark}`,
  background: ThemeColors.red,
  [style.focus]: {
    border: 'none',
    outline: 'none',
    boxShadow: `0px 1px 0px 0px ${ThemeColors.black}`
  },
  [style.hover]: {
    background: ThemeColors.redDark
  },
  [style.active]: {
    top: asRem(2),
    border: 'none',
    outline: 'none',
    boxShadow: `0px 1px 0px 0px ${ThemeColors.redDark}`
  }
});
