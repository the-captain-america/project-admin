import shades from '@bupa-digital/shades/react';
import { asRem, Theme, ThemeColors } from 'utils/common-ui';

export const Muscle = shades.span({
  padding: `${asRem(8)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: ThemeColors.red,
  color: ThemeColors.white,
  marginBottom: asRem(8)
});

// export const FlexBlock = shades.div({
//   marginTop: asRem(24)
// });

export const Heading = shades.h4({
  color: Theme.font.defaultColor,
  lineHeight: asRem(24),
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(16),
  fontWeight: 600
});
