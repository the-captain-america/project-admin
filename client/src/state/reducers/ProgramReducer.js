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

const INITIAL_STATE = {
  programs: {},
  selectedProgram: {},
  error: '',
  isEdit: false,
  activePrograms: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROGRAM_FETCH:
      return { ...state, programs: action.payload };
    case PROGRAM_CREATE:
      return state;
    case PROGRAM_UPDATE:
      return state;
    case PROGRAM_DELETE:
      return state;
    case PROGRAM_ERROR:
      return { ...state, error: action.payload };
    case PROGRAM_SELECTED:
      return { ...state, selectedProgram: action.payload };
    case PROGRAM_SET_EDIT:
      return { ...state, isEdit: !state.isEdit };
    case PROGRAM_SET_DEFAULT:
      return { ...state, activePrograms: [...state, action.payload] };
    case PROGRAM_ACTIVE_CREATE:
      return { ...state, activePrograms: [...action.payload] };
    default:
      return state;
  }
};
