import {
  CURRENT_SELECTION_FETCH,
  CURRENT_SELECTION_CREATE,
  CURRENT_SELECTION_UPDATE,
  CURRENT_SELECTION_DELETE,
  CURRENT_SELECTION_SUCCESS
} from 'state/constants';

const INITIAL_STATE = {
  card: {},
  isEditMode: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_SELECTION_FETCH:
      return { ...state, card: action.payload };
    case CURRENT_SELECTION_UPDATE:
      return { ...state };
    case CURRENT_SELECTION_CREATE:
      return { ...state };
    case CURRENT_SELECTION_SUCCESS:
      return { ...state };
    case CURRENT_SELECTION_DELETE:
      return state;
    default:
      return state;
  }
};
