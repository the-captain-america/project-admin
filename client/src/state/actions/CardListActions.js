import { database } from 'firebase';
import {
  SELECTIONS_LIST_ERROR,
  SELECTIONS_LIST_FETCH,
  SELECTIONS_LIST_SUCCESS
} from 'state/constants';

export const selectionError = error => {
  return {
    type: SELECTIONS_LIST_ERROR,
    error
  };
};

export const selectionSuccess = () => {
  return {
    type: SELECTIONS_LIST_SUCCESS
  };
};

export const selectionsFetch = () => {
  return dispatch => {
    database()
      .ref(`/cards`)
      .on('value', snapshot => {
        const cardList = snapshot.val();
        dispatch({
          type: SELECTIONS_LIST_FETCH,
          payload: cardList
        });
      });
  };
};
