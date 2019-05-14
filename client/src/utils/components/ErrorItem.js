import React from 'react';
import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, Icon, Theme, ThemeColors } from 'utils/common-ui';

const CloseError = shades.span({
  display: 'block',
  marginleft: 'auto',
  cursor: 'pointer',
  verticalAlign: 'middle',
  color: ThemeColors.redDark
});

const ErrorItem = ({ error, isActive = false, onPress }) => {
  const Container = shades.div({
    position: 'relative',
    display: 'none',
    padding: asRem(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 0,
    borderRadius: Theme.border.defaultRadius,
    color: ThemeColors.white,
    textAlign: 'center',
    fontFamily: Theme.font.defaultFamily,
    border: `2px solid ${ThemeColors.digitalBlue}`,
    boxSizing: 'border-box',
    background: ThemeColors.red,
    [style.prop('isActive')]: {
      display: 'flex'
    }
  });
  return (
    <Container isActive={isActive}>
      {error ? error.message : 'No errors'}
      <CloseError onClick={onPress}>
        <Icon color="white" name="close" />
      </CloseError>
    </Container>
  );
};

export default ErrorItem;
