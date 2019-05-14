import { SELECT_ITEM, SELECT_ITEM_FETCH } from 'state/constants';

const INITIAL_STATE = {
  items: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return { ...state, items: action.payload };
    case SELECT_ITEM_FETCH:
      return state;
    default:
      return state;
  }
};
