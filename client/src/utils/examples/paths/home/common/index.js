import React from 'react';
import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { ThemeColors, Theme, asRem } from 'utils/common-ui';

export const ControlGroup = shades.div({
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const Bookmark = shades.div({
  position: 'absolute',
  top: '-10px',
  right: '8px',
  display: 'none',
  fontSize: asRem(48),
  color: ThemeColors.red,
  [style.prop('isActive')]: {
    display: 'block'
  }
});

export const Title = shades.span({
  fontSize: asRem(16),
  color: ThemeColors.grey,
  fontFamily: Theme.font.defaultFamily,
  display: 'block',
  textTransform: 'uppercase'
});

export const HeadingSmall = shades.h3({
  fontFamily: Theme.font.defaultFamily,
  textAlign: 'left',
  lineHeight: asRem(24),
  marginTop: 0,
  marginBottom: 0,
  color: ThemeColors.grey
});

export const Current = shades.div({
  marginTop: asRem(16),
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center'
});

export const Progress = ({ number, outOf }) => {
  const Container = shades.span({
    color: ThemeColors.grey,
    display: 'inline-block',
    fontFamily: Theme.font.defaultFamily,
    fontSize: asRem(14),
    background: ThemeColors.greyBorder,
    borderRadius: Theme.border.defaultRadius,
    overflow: 'hidden',
    padding: asRem(8)
  });

  return (
    <Container>
      {number} / {outOf} sessions completed
    </Container>
  );
};
