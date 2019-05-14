import { auth, database } from 'firebase';

import {
  SESSION_CREATE,
  SESSION_UPDATE,
  SESSION_ERROR,
  SESSION_FETCH,
  SESSION_DELETE,
  SESSION_SELECTED,
  SESSION_SET_EDIT
} from 'state/constants';

const sessionError = error => {
  return {
    type: SESSION_ERROR,
    error
  };
};

export const sessionSelected = payload => {
  return {
    type: SESSION_SELECTED,
    payload
  };
};

export const sessionSetEdit = () => {
  return {
    type: SESSION_SET_EDIT
  };
};

export const sessionCreate = data => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/session`)
      .push(data)
      .then(() => {
        dispatch({ type: SESSION_CREATE });
      });
  };
};

export const sessionFetch = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/session`)
      .on('value', snapshot => {
        dispatch({
          type: SESSION_FETCH,
          payload: snapshot.val()
        });
      });
  };
};

export const sessionUpdate = (id, data) => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/session/${id}`)
      .update(data)
      .then(() => {
        dispatch({
          type: SESSION_UPDATE
        });
      })
      .catch(error => {
        dispatch(sessionError(error));
      });
  };
};

export const sessionDelete = id => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/session/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: SESSION_DELETE });
      })
      .catch(error => {
        dispatch(sessionError(error));
      });
  };
};
