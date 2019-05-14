import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

const IconItem = shades.div({
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  position: 'relative',
  margin: 0,
  padding: 0,
  height: '100%',
  marginLeft: 'auto',
  display: 'none',
  [style.prop('isActive')]: {
    display: 'flex'
  }
});

// verticalAlign: 'middle',
// color: ThemeColors.red};
// height: asRem(24),
// width: asRem(24),

export default IconItem;
