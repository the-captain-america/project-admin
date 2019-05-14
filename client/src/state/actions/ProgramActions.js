import { auth, database } from 'firebase';

import {
  PROGRAM_CREATE,
  PROGRAM_UPDATE,
  PROGRAM_ERROR,
  PROGRAM_FETCH,
  PROGRAM_DELETE,
  PROGRAM_SELECTED,
  PROGRAM_SET_EDIT,
  PROGRAM_SET_DEFAULT,
  PROGRAM_ACTIVE_CREATE
} from 'state/constants';

const programError = error => {
  return {
    type: PROGRAM_ERROR,
    error
  };
};

export const programSelected = payload => {
  return {
    type: PROGRAM_SELECTED,
    payload
  };
};

export const programSetDefault = payload => {
  return {
    type: PROGRAM_SET_DEFAULT,
    payload
  };
};

export const programSetEdit = () => {
  return {
    type: PROGRAM_SET_EDIT
  };
};

export const programCreate = data => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/program`)
      .push(data)
      .then(() => {
        dispatch({ type: PROGRAM_CREATE });
      });
  };
};

export const programFetch = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/program`)
      .on('value', snapshot => {
        dispatch({
          type: PROGRAM_FETCH,
          payload: snapshot.val()
        });
      });
  };
};

export const programUpdate = (id, data) => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/program/${id}`)
      .update(data)
      .then(() => {
        dispatch({
          type: PROGRAM_UPDATE
        });
      })
      .catch(error => {
        dispatch(programError(error));
      });
  };
};

export const programDelete = id => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/program/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: PROGRAM_DELETE });
      })
      .catch(error => {
        dispatch(programError(error));
      });
  };
};

export const programActiveCreate = data => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/active-programs`)
      .push(data)
      .then(() => {
        dispatch({ type: PROGRAM_ACTIVE_CREATE });
      });
  };
};

// renderItems
// Use the current reducer for program actions (this one)
// to continue working on the actions and add onto it several more properties.
// Create an action which will add the object (keep what is currently there and add to it)
// The array with the selected items.

// Aslo need to add drag and drop functionality for the items...
// But first the requirement needs to include the refactor to one page view
// of the add / edit / drag / delete functionality...
