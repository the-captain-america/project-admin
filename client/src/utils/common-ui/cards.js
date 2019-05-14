import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, ThemeColors, Theme } from 'utils/common-ui';

export const Card = shades.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginTop: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: asRem(8),
  padding: asRem(24),
  width: '100%',
  overflow: 'hidden',
  border: '1px solid #dbdbdb',
  borderRadius: Theme.border.defaultRadius,
  boxSizing: 'border-box',
  background: ThemeColors.white,
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
