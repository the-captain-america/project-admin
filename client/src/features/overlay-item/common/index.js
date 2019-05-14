import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import mq from '@bupa-digital/shades/utils.mq';
import { asRem } from 'utils/common-ui';

export const OverlayItem = ({ onPress, isActive }) => {
  const OverlayBlock = shades.div({
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    display: 'none',
    background: 'rgba(0, 0, 0, 0.3)',
    [style.prop('isActive')]: {
      display: 'block'
    },
    [style.prop('stack')]: value => ({
      zIndex: 999
    })
  });
  return <OverlayBlock isActive={isActive} onClick={onPress} />;
};
