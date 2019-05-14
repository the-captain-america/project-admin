import { COPY_SELECTION } from 'state/constants';

export const copySelection = data => {
  return {
    type: COPY_SELECTION,
    payload: data
  };
};
