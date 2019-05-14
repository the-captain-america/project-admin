import constants from 'state/constants';

const expandMenu = () => ({
  type: constants.EXPAND_MENU
});

const toggleDev = () => ({
  type: constants.TOGGLE_DEV
});

const toggleGrid = () => ({
  type: constants.TOGGLE_GRID
});

export default { expandMenu, toggleDev, toggleGrid };
