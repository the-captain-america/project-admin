import shades from '@bupa-digital/shades/react';
import { asRem, Theme } from 'utils/common-ui';

export const Text = shades.div({
  fontSize: asRem(16),
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24)
});

export default Text;
