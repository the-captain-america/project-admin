import style from '@bupa-digital/shades/utils.style/compat';
import shades from '@bupa-digital/shades/react';
import { asRem, Theme } from 'utils/common-ui';

export const Content = shades.div({
  margin: 0,
  paddingTop: 0,
  fontFamily: Theme.font.defaultFamily,
  fontWeight: Theme.font.weightRegular,
  lineHeight: Theme.font.defaultLineHeight,
  boxSizing: 'border-box',
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  })
});
