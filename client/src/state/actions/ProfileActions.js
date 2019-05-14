import FireBaseTools from 'utils/firebase';
import constants from 'state/constants';

export function loginWithProvider(provider) {
  const request = FireBaseTools.loginWithProvider(provider);
  return {
    type: constants.LOGIN_WITH_PROVIDER_FIREBASE,
    payload: request
  };
}

export function registerUser(user) {
  const request = FireBaseTools.registerUser(user);
  return {
    type: constants.REGISTER_FIREBASE_USER,
    payload: request
  };
}

export function loginUser(user) {
  const request = FireBaseTools.loginUser(user);
  return {
    type: constants.LOGIN_FIREBASE_USER,
    payload: request
  };
}

export function fetchUser() {
  const request = FireBaseTools.fetchUser();
  return {
    type: constants.FETCH_FIREBASE_USER,
    payload: request
  };
}

export function updateUser(user) {
  const request = FireBaseTools.updateUserProfile(user);
  return {
    type: constants.UPDATE_FIREBASE_USER,
    payload: request
  };
}

export function changePassword(newPassword) {
  const request = FireBaseTools.changePassword(newPassword);
  return {
    type: constants.CHANGE_FIREBASE_USER_PASSWORD,
    payload: request
  };
}

export function resetPasswordEmail(email) {
  const request = FireBaseTools.resetPasswordEmail(email);
  return {
    type: constants.FIREBASE_PASSWORD_RESET_EMAIL,
    payload: request
  };
}

export function logoutUser(user) {
  const request = FireBaseTools.logoutUser(user);
  return {
    type: constants.LOGOUT_FIREBASE_USER,
    payload: request
  };
}
