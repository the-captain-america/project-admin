import shades from '@bupa-digital/shades/react';
import style from '@bupa-digital/shades/utils.style/compat';
import { asRem, ThemeColors } from 'utils/common-ui';

const Dialog = shades.div({
  width: asRem(500),
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 9999,
  position: 'relative',
  top: asRem(100),
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column'
});

const DialogTitle = shades.h2({
  fontWeight: 'bolder',
  color: 'black',
  fontSize: asRem(20),
  textAlign: 'left'
});

const DialogContent = shades.div({
  padding: asRem(16),
  display: 'block',
  padding: asRem(24)
});

const DialogActions = shades.div({
  position: 'relative',
  width: '100%',
  padding: asRem(16),
  display: 'block',
  background: ThemeColors.white
});

const DialogOverlay = shades.div({
  position: 'fixed',
  display: 'none',
  zIndex: 3,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  [style.prop('open')]: {
    display: 'block'
  }
});

const DialogContainer = shades.div({
  display: 'none',
  [style.prop('open')]: {
    display: 'block'
  }
});

export {
  DialogOverlay,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContainer
};
