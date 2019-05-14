import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

export const ButtonCircle = shades.button({
  padding: asRem(8),
  background: ThemeColors.white,
  display: 'block',
  border: 'none',
  boxSizing: 'border-box',
  color: ThemeColors.greyBorder,
  [style.hover]: {
    cursor: 'pointer',
    opacity: '0.8'
  }
});

export default ButtonCircle;
