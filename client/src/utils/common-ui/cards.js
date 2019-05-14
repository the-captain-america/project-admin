import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

export const Card = shades.div({
  margin: 0,
  marginBottom: asRem(8),
  position: 'relative',
  padding: asRem(24),
  boxSizing: 'border-box',
  width: '100%',
  borderRadius: Theme.border.defaultRadius,
  display: 'block',
  background: ThemeColors.white,
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  marginLeft: 'auto',
  marginright: 'auto',
  border: '1px solid #dbdbdb',
  overflow: 'hidden',

  [style.elementOf('nthChild(1)')]: {
    marginTop: asRem(16)
  }
});

export const InsideCard = shades.span({
  fontFamily: Theme.font.defaultFamily,
  color: ThemeColors.grey,
  display: 'block',
  lineHeight: asRem(24),
  paddingBottom: 0,
  paddingTop: 0,
  width: asRem(200),
  position: 'relative',
  left: 0,
  [style.prop('isEdit')]: {
    left: asRem(100)
  }
});
