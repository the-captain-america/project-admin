import { auth } from 'firebase';
// import auth from 'firebase/auth';
// import database from 'firebase/database';

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGIN_USER_CLEAR_ERROR,
  LOGOUT_USER
} from 'state/constants';

export const loginUserSuccess = currentUser => {
  // console.log('we have something', currentUser && currentUser.email);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: currentUser
  };
};

const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  };
};

const logoutUserFail = () => {
  return {
    type: LOGOUT_USER_FAIL
  };
};

export const loginUserFailure = error => {
  return {
    type: LOGIN_USER_FAIL,
    payload: error
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    return auth()
      .signOut()
      .then(() => {
        dispatch(logoutUserSuccess());
      })
      .catch(error => {
        dispatch(logoutUserFail(error));
      });
  };
};

export const clearError = () => {
  return {
    type: LOGIN_USER_CLEAR_ERROR
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const currentUser = auth().currentUser;
        dispatch(loginUserSuccess(currentUser));
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      });
  };
};

export default loginUser;
