import { auth, database } from 'firebase';
// import auth from 'firebase/auth';
// import database from 'firebase/database';

import {
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_ERROR,
  ITEM_FETCH,
  ITEM_DELETE,
  ITEM_SELECTED
} from 'state/constants';

const itemError = error => {
  return {
    type: ITEM_ERROR,
    error
  };
};

export const itemSelected = payload => {
  return {
    type: ITEM_SELECTED,
    payload
  };
};

export const itemCreate = data => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/items`)
      .push(data)
      .then(() => {
        dispatch({ type: ITEM_CREATE });
      });
  };
};

export const itemFetch = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/items`)
      .on('value', snapshot => {
        console.log('value:', snapshot.val());
        dispatch({
          type: ITEM_FETCH,
          payload: snapshot.val()
        });
      });
  };
};

export const itemUpdate = (id, data) => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/items/${id}`)
      .update(data)
      .then(() => {
        dispatch({
          type: ITEM_UPDATE
        });
      })
      .catch(error => {
        dispatch(itemError(error));
      });
  };
};

export const itemDelete = id => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/items/${id}`)
      .remove()
      .then(() => {
        dispatch({ type: ITEM_DELETE });
      })
      .catch(error => {
        dispatch(itemError(error));
      });
  };
};
