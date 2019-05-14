import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { Theme, ThemeColors } from 'utils/common-ui';

const Text = shades.h1({
  fontFamily: Theme.font.defaultFamily,
  color: ThemeColors.redDark,
  textAlign: 'left',
  [style.prop('asTheme')]: value => ({
    color: value
  }),
  [style.prop('align')]: value => ({
    textAlign: value
  })
});

export const Heading = ({ children, color }) => {
  return <Text color={color}>{children}</Text>;
};
