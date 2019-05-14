import { auth, database } from 'firebase';
// import auth from 'firebase/auth';
// import database from 'firebase/database';

import {
  TRACKER_CREATE,
  TRACKER_UPDATE,
  TRACKER_ERROR,
  TRACKER_FETCH,
  TRACKER_DELETE
} from 'state/constants';

const itemError = error => {
  return {
    type: TRACKER_ERROR,
    error
  };
};

export const trackerUpdate = ({ prop, value }) => {
  return {
    type: TRACKER_UPDATE,
    payload: { prop, value }
  };
};

export const trackerCreate = ({ date, weight, waste }) => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/history`)
      .push({ date, weight, waste })
      .then(() => {
        dispatch({ type: TRACKER_CREATE });
      });
  };
};

export const trackerFetch = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/history`)
      .on('value', snapshot => {
        dispatch({
          type: TRACKER_FETCH,
          payload: snapshot.val()
        });
      });
  };
};

export const trackerDelete = id => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/history/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: TRACKER_DELETE });
      })
      .catch(error => {
        dispatch(itemError(error));
      });
  };
};
