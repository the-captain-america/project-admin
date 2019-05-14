import shades from '@bupa-digital/shades/react';
import { Theme, asRem, ThemeColors } from './theme';

const AuthLabel = shades.div({
  position: 'absolute',
  top: asRem(-32),
  padding: '4px 8px',
  display: 'block',
  borderRadius: Theme.border.defaultRadius,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  fontSize: asRem(14),
  backgroundColor: ThemeColors.red,
  color: ThemeColors.white,
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24)
});

const Label = shades.label({
  fontFamily: Theme.font.defaultFamily,
  fontSize: asRem(16),
  color: ThemeColors.shadeDark,
  marginBottom: 0,
  marginTop: asRem(8),
  boxSizing: 'border-box'
});

export { AuthLabel, Label };
