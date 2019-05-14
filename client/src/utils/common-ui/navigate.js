import React from 'react';
import shades from '@bupa-digital/shades/react';
import mq from '@bupa-digital/shades/utils.mq';
import style from '@bupa-digital/shades/utils.style/compat';
import {
  Theme,
  baseButtonStyles,
  ThemeColors,
  colorLuminance,
  asRem
} from 'utils/common-ui';
import { history } from 'state/store';

const baseStyles = {
  ...baseButtonStyles,
  border: 'none',
  fontSize: asRem(14),
  marginTop: asRem(16),
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: asRem(150),
  padding: asRem(12),
  backgroundColor: ThemeColors.red,
  [style.focus]: {
    outline: 'none'
  },
  [style.hover]: {
    backgroundColor: colorLuminance(ThemeColors.red, -0.2)
  },
  [style.active]: {
    backgroundColor: colorLuminance(ThemeColors.red, -0.2)
  },
  [style.prop('width')]: value => ({
    width: asRem(value)
  }),
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  }),
  [style.prop('asTheme')]: theme => ({
    backgroundColor: theme,
    padding: asRem(10),
    border: `2px solid ${colorLuminance(theme, -0.2)}`,
    borderColor: colorLuminance(theme, -0.2),
    [style.hover]: {
      backgroundColor: colorLuminance(theme, -0.2)
    },
    [style.active]: {
      backgroundColor: colorLuminance(theme, +0.2)
    }
  }),
  [style.prop('noBorder')]: {
    border: 'none'
  },
  [mq()
    .screen()
    .from(Theme.mq.lg)]: {
    marginTop: 0,
    [style.prop('verticalPush')]: value => ({
      marginTop: asRem(value)
    }),
    [style.prop('verticalPull')]: value => ({
      marginBottom: asRem(value)
    })
  }
};

export const Navigate = ({
  to,
  children,
  clean = false,
  style = {},
  ...rest
}) => {
  const StyledButton = shades.button({
    ...baseStyles,
    ...style
  });
  const CleanButton = shades.button({
    border: 'none',
    background: 'none',
    fontSize: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    lineHeight: 'inherit',
    ...style
  });

  return (
    <React.Fragment>
      {clean && (
        <CleanButton onClick={() => history.push(to ? to : '/')} {...rest}>
          {children}
        </CleanButton>
      )}
      {!clean && (
        <StyledButton
          {...rest}
          onClick={() => history.push(to ? to : '/')}
          {...rest}
        >
          {children}
        </StyledButton>
      )}
    </React.Fragment>
  );
};
