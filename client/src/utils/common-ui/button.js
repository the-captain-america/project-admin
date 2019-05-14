import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors, Theme } from './theme';
import { Icon } from './icon';

export const baseButtonStyles = {
  color: 'inherit',
  fontSize: asRem(16),
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24),
  textAlign: 'center',
  cursor: 'pointer',
  boxSizing: 'border-box'
};

const Container = shades.button({
  ...baseButtonStyles,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${asRem(8)} ${asRem(16)}`,
  width: '100%',
  color: ThemeColors.white,
  opacity: 1,
  border: 'none',
  borderBottom: `2px solid #bc3a3a`,
  borderRadius: '2px',
  background: ThemeColors.red,
  [style.hover]: {
    cursor: 'pointer',
    background: ThemeColors.redDark
  },
  [style.disabled]: {
    cursor: 'not-allowed',
    border: `1px solid #999999`,
    background: '#cccccc',
    color: '#666666'
  },
  [style.prop('isHidden')]: {
    display: 'none'
  },
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  }),
  [style.prop('isLoading')]: {
    opacity: '.5'
  },
  [style.prop('clear')]: {
    background: ThemeColors.white,
    border: '2px solid #fe4d4d',
    borderRadius: Theme.border.defaultRadius,
    overflow: 'hidden',
    [style.hover]: {
      color: 'white',
      background: ThemeColors.red
    }
  }
});

export const Button = ({ children, onPress, icon = false, ...rest }) => {
  return (
    <Container {...rest} onClick={onPress}>
      {children}
      {icon && <Icon style={{ marginLeft: asRem(8) }} name={icon} />}
    </Container>
  );
};
