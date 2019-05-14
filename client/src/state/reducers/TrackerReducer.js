import {
  TRACKER_CREATE,
  TRACKER_UPDATE,
  TRACKER_ERROR,
  TRACKER_FETCH,
  TRACKER_DELETE
} from 'state/constants';

const INITIAL_STATE = {
  items: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRACKER_FETCH:
      return { ...state, items: action.payload };
    case TRACKER_CREATE:
      return state;
    case TRACKER_UPDATE:
      return { ...state, items: action.payload };
    case TRACKER_DELETE:
      return state;
    case TRACKER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
