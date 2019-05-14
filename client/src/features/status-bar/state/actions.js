import { auth, database } from 'firebase';
import { STATUS_FETCH, STATUS_UPDATE, STATUS_ERROR } from './constants';

const statusError = error => {
  return {
    type: STATUS_ERROR,
    error
  };
};

export const fetchStatus = () => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/status`)
      .on('value', snapshot => {
        console.log('value:', snapshot.val());
        dispatch({
          type: STATUS_FETCH,
          payload: snapshot.val()
        });
      });
  };
};

export const updateStatus = data => {
  const { currentUser } = auth();
  return dispatch => {
    database()
      .ref(`/users/${currentUser.uid}/status/`)
      .update(data)
      .then(() => {
        dispatch({
          type: STATUS_UPDATE
        });
      })
      .catch(error => {
        dispatch(statusError(error));
      });
  };
};
