import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, Theme, ThemeColors } from 'utils/common-ui';

export const Section = shades.section({
  position: 'relative',
  width: '100%',
  height: 'auto',
  margin: 0,
  padding: asRem(16),
  borderRadius: Theme.border.defaultRadius,
  transition: '300ms ease all',
  border: '1px solid #dbdbdb',
  background: ThemeColors.white,
  boxSizing: 'border-box',
  [style.lastChild]: {
    marginBottom: 0
  },
  [style.prop('setHeight')]: value => ({
    height: asRem(value)
  }),
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  })
});

export const SectionHeading = shades.h1({
  fontFamily: Theme.font.defaultFamily,
  color: ThemeColors.grey,
  margin: 0,
  paddingBottom: asRem(8),
  fontWeight: 600
});

export const SectionSmall = shades.small({
  fontFamily: Theme.font.defaultFamily,
  color: ThemeColors.grey,
  fontSize: asRem(14),
  fontWeight: 300
});

export const SectionText = shades.p({
  fontFamily: Theme.font.defaultFamily,
  color: ThemeColors.grey,
  fontSize: asRem(16),
  fontWeight: 300
});
