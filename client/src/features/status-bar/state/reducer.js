import { STATUS_UPDATE, STATUS_FETCH, STATUS_ERROR } from './constants';

const INITIAL_STATE = {
  status: {}
};

export const StatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_FETCH:
      return { ...state, status: action.payload };
    case STATUS_UPDATE:
      return state;
    case STATUS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
