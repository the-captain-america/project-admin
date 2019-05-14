import {
  EXPAND_SIDEMENU,
  SET_OVERLAY,
  CONTROLS_SET_ACTION_PANEL
} from 'state/constants';

const INITIAL_STATE = {
  isExpanded: false,
  overlay: false,
  actionPanel: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPAND_SIDEMENU:
      return { ...state, isExpanded: !state.isExpanded };
    case SET_OVERLAY:
      return { ...state, overlay: !state.overlay };
    case CONTROLS_SET_ACTION_PANEL:
      return { ...state, actionPanel: !state.actionPanel };
    default:
      return state;
  }
};
