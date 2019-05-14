import shades from '@bupa-digital/shades/react';
import mq from '@bupa-digital/shades/utils.mq';
import { Theme, ThemeUI } from './theme';

export const GridContainer = shades.div({
  position: 'relative',
  maxWidth: '100%',
  width: '100%',
  boxSizing: 'border-box',
  [mq()
    .screen()
    .from(Theme.mq.lg)]: {
    margin: '0 auto',
    width: '100%',
    padding: `0 ${ThemeUI.grid.gutterWidth / 2}px`,
    maxWidth: `${ThemeUI.grid.containerWidths[2]}px`
  },
  [mq()
    .screen()
    .from(Theme.mq.xl)]: {
    margin: '0 auto',
    padding: `0 ${ThemeUI.grid.gutterWidth / 2}px`,
    width: '100%',
    maxWidth: `${ThemeUI.grid.containerWidths[3]}px`
  }
});
