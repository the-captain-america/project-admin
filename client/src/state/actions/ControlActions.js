import {
  EXPAND_SIDEMENU,
  SET_OVERLAY,
  CONTROLS_SET_ACTION_PANEL
} from 'state/constants';

export const setSideMenu = () => ({
  type: EXPAND_SIDEMENU
});

export const setOverlay = () => ({
  type: SET_OVERLAY
});

export const setActionsPanel = () => ({
  type: CONTROLS_SET_ACTION_PANEL
});
