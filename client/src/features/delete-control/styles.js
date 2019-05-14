import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors } from 'utils/common-ui';

export const Delete = shades.button({
  border: 'none',
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: '0.3s all ease-in-out',
  right: 0,
  background: ThemeColors.white,
  color: ThemeColors.red,
  [style.prop('isActive')]: {
    right: asRem(-100)
  },
  [style.hover]: {
    cursor: 'pointer',
    background: ThemeColors.red,
    color: ThemeColors.white
  },
  [style.focus]: {
    outline: 'none'
  }
});

export const Container = shades.div({});
