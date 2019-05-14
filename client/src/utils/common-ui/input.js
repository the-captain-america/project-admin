import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors, Theme } from './theme';

export const Input = shades.input({
  padding: asRem(8),
  marginTop: asRem(16),
  marginTop: asRem(16),
  position: 'relative',
  fontSize: asRem(16),
  fontFamily: Theme.font.defaultFamily,
  lineHeight: asRem(24),
  borderBottom: `1px solid ${ThemeColors.shadeLight}`,
  boxSizing: 'border-box'
});

export const Textarea = shades.textarea({
  background: '#fefcf5c9',
  border: `1px solid ${ThemeColors.grey}`
});
