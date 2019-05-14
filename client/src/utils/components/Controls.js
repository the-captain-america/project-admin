import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem } from 'utils/common-ui';

export const Controls = shades.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: 0,
  padding: 0,
  flexDirection: 'row',
  boxSizing: 'border-box',
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  })
});

export default Controls;
