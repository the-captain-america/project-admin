import { SELECT_ITEM, SELECT_ITEM_FETCH } from 'state/constants';

export const selectItem = payload => {
  return {
    type: SELECT_ITEM,
    payload
  };
};

export const selectItemFetch = () => {
  return {
    type: SELECT_ITEM_FETCH
  };
};
