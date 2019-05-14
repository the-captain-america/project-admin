import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem } from 'utils/common-ui';

export const Push = shades.div({
  display: 'block',
  [style.prop('isHidden')]: {
    display: 'none'
  },
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  })
});
