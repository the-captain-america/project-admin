import React from 'react';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { Icon, ThemeColors, Theme } from 'utils/common-ui';

const SnackBar = ({ isVisible, message, onPress }) => {
  const SnackContainer = shades.div({
    position: 'fixed',
    bottom: asRem(-10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    background: 'none',
    [style.prop('isVisible')]: {
      bottom: asRem(10)
    }
  });

  const Snack = shades.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: asRem(16),
    background: ThemeColors.white,
    width: asRem(300),
    transition: 'bottom 0.3s ease-in-out',
    opacity: 0.03,
    border: `1px solid ${ThemeColors.greyWarm}`,
    boxShadow: '3px 1px 6px rgba(0, 0, 0, 0.14)',
    [style.prop('isVisible')]: {
      opacity: 1
    }
  });

  const SnackText = shades.span({
    fontFamily: Theme.font.defaultFamily,
    fontSize: asRem(16),
    color: ThemeColors.bupaNavy,
    position: 'relative',
    textAlign: 'center',
    padding: asRem(16)
  });

  const SnackClose = shades.button({
    right: asRem(8),
    top: asRem(8),
    borderradius: '50%',
    verticalAlign: 'middle',
    margin: '0 auto',
    border: 0,
    cursor: 'pointer',
    padding: asRem(4),
    background: ThemeColors.greyWarm,
    verticalAlign: 'middle',
    color: ThemeColors.white,
    [style.hover]: {
      background: ThemeColors.greyWarm
    }
  });
  return (
    <SnackContainer isVisible={isVisible}>
      <Snack>
        <SnackText>{message}</SnackText>
        <SnackClose onClick={onPress}>
          <Icon name="close" />
        </SnackClose>
      </Snack>
    </SnackContainer>
  );
};

export default SnackBar;
