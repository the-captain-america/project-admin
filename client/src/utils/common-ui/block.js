import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, Theme, ThemeColors } from 'utils/common-ui';

export const Box = shades.li({
  marginright: 0,
  marginLeft: 0,
  position: 'relative',
  padding: asRem(24),
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: Theme.defaultRadius,
  display: 'block',
  background: ThemeColors.white,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  border: '1px solid #dbdbdb',
  overflow: 'hidden',
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  }),
  [style.prop('nth-child(1)')]: {
    marginTop: asRem(24)
  }
});

export const FlexBlock = shades.div({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  [style.prop('align')]: value => ({
    alignItems: value
  }),
  [style.prop('justify')]: value => ({
    justifyContent: value
  })
});

export const InsideBlock = shades.span({
  fontFamily: Theme.font.defaultFamily,
  display: 'block',
  lineHeight: asRem(24),
  paddingBottom: asRem(2),
  paddingTop: asRem(8),
  width: '100%',
  boxSizing: 'border-box'
});
