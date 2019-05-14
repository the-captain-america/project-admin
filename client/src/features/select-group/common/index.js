import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, Theme, ThemeColors } from 'utils/common-ui';

const config = {
  greyBackground: '#f5f5f5',
  greyBorder: '#ddd',
  greyText: '#898989',
  mainLight: '#d9f2fb',
  main: '#00a9e0',
  mainDark: '#007da6'
};

export const Select = shades.div({
  position: 'relative',
  display: 'inline-block',
  minWidth: asRem(264),
  width: '100%',
  [style.focus]: {
    outline: 0,
    [style.prop('isActive')]: {
      boxShadow: `0 0 1px 1px ${config.main}`
    }
  }
});

export const Label = shades.label({
  display: 'block',
  marginBottom: asRem(6),
  fontWeight: 600
});

export const Selection = shades.div({
  position: 'relative',
  padding: '8px 0 8px 0',
  width: '100%',
  order: `1px solid ${config.greyBorder}`,
  background: ThemeColors.white
});

export const ValueItem = shades.div({
  position: 'relative',
  display: 'inline-block',
  padding: `${asRem(8)} ${asRem(12)}`,
  [style.prop('multiple')]: {
    paddingRight: asRem(30),
    marginRight: asRem(4),
    marginLeft: asRem(8),
    marginBottom: asRem(8),
    color: config.greyText,
    fontFamily: Theme.font.defaultFamily,
    background: ThemeColors.red,
    color: ThemeColors.white,
    [style.firstChild]: {
      marginLeft: 0
    }
  }
});

export const Delete = shades.span({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'block',
  padding: asRem(8),
  fontSize: asRem(8),
  cursor: 'pointer'
});

export const Placeholder = shades.div({
  padding: '5px 10px',
  color: config.greyText,
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(16)
});

export const Arrow = shades.span({
  position: 'absolute',
  top: asRem(8),
  right: asRem(8),
  display: 'block',
  padding: asRem(12),
  fontSize: asRem(12),
  color: config.greyText
});

export const Options = shades.div({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  color: config.greyText,
  fontFamily: Theme.font.defaultFamily,
  border: `1 solid ${config.greyBorder}`,
  borderWidth: `0 1px`,
  background: ThemeColors.white
});

export const Option = shades.div({
  padding: '10px 15px',
  orderBottom: `1px solid ${config.greyBorder}`,
  cursor: 'pointer',

  [style.prop('selected')]: {
    border: `1px solid ${ThemeColors.redDark}`,
    margin: `-1px -1px 0`,
    color: ThemeColors.white,
    background: ThemeColors.red
  },

  [style.prop('focused')]: {
    background: ThemeColors.red,
    border: `1px solid ${ThemeColors.redDark}`,
    color: ThemeColors.white
  }
});

export const Checkbox = shades.span({
  content: '',
  verticalAlign: 'top',
  display: 'inline-block',
  width: asRem(16),
  height: asRem(16),
  padding: asRem(2),
  order: `1px solid ${config.greyBorder}`,
  borderRadius: '2px',
  margin: '2px 12px 0 0',
  color: ThemeColors.white,
  fontSize: asRem(10),
  [style.prop('selected')]: {
    borderColor: config.mainDark,
    background: config.main
  }
});
