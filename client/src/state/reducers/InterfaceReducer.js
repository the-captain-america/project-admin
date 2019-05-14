import constants from 'state/constants';

const INITIAL_STATE = {
  isDev: false,
  isExpanded: false,
  isGrid: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.TOGGLE_DEV:
      return { ...state, isDev: !state.isDev };
    case constants.EXPAND_MENU:
      return { ...state, isExpanded: !state.isExpanded };
    case constants.TOGGLE_GRID:
      return { ...state, isGrid: !state.isGrid };
    default:
      return state;
  }
};
