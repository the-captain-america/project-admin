import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  LOGIN_USER_CLEAR_ERROR
} from 'state/constants';

const INITIAL_STATE = {
  user: null,
  error: '',
  loading: false,
  loggedIn: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, error: '', loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        error: '',
        user: action.payload,
        loading: false,
        loggedIn: true
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loggedIn: false
      };
    case LOGOUT_USER:
      return { ...state, error: '', loading: true, loggedIn: false };
    case LOGIN_USER_CLEAR_ERROR:
      return { ...state, error: '' };
    case LOGOUT_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT_USER_SUCCESS:
      return { ...state, loading: false, error: '' };
    default:
      return state;
  }
};
