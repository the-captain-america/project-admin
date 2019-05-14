import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, Theme } from 'utils/common-ui';

const Notes = shades.section({
  width: '100%',
  marginTop: asRem(24),
  padding: asRem(16),
  border: '1px solid #dbdbdb',
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(16),
  borderRadius: Theme.border.defaultRadius,
  boxSizing: 'border-box',
  background: '#f7f7f7',
  [style.prop('verticalPush')]: value => ({
    marginTop: asRem(value)
  }),
  [style.prop('verticalPull')]: value => ({
    marginBottom: asRem(value)
  })
});

export default Notes;
