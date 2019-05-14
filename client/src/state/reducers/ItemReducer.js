import {
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_ERROR,
  ITEM_FETCH,
  ITEM_DELETE,
  ITEM_SELECTED
} from 'state/constants';

const INITIAL_STATE = {
  items: {},
  selectedItem: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEM_FETCH:
      return { ...state, items: action.payload };
    case ITEM_CREATE:
      return state;
    case ITEM_UPDATE:
      return state;
    case ITEM_DELETE:
      return state;
    case ITEM_ERROR:
      return { ...state, error: action.payload };
    case ITEM_SELECTED:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
};
