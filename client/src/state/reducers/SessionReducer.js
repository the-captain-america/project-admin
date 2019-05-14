import {
  SESSION_CREATE,
  SESSION_UPDATE,
  SESSION_ERROR,
  SESSION_FETCH,
  SESSION_DELETE,
  SESSION_SELECTED,
  SESSION_SET_EDIT
} from 'state/constants';

const INITIAL_STATE = {
  sessions: {},
  selectedSession: {},
  error: '',
  isEdit: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_FETCH:
      return { ...state, sessions: action.payload };
    case SESSION_CREATE:
      return state;
    case SESSION_UPDATE:
      return state;
    case SESSION_DELETE:
      return state;
    case SESSION_ERROR:
      return { ...state, error: action.payload };
    case SESSION_SELECTED:
      return { ...state, selectedSession: action.payload };
    case SESSION_SET_EDIT:
      return { ...state, isEdit: !state.isEdit };
    default:
      return state;
  }
};
