import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ItemReducer from './ItemReducer';
import ProgramReducer from './ProgramReducer';
import { StatusReducer } from 'features/status-bar/state/reducer';
import SessionReducer from './SessionReducer';
import SelectItemReducer from './SelectItemReducer';
import TrackerReducer from './TrackerReducer';
import ProfileReducer from './AuthFirebaseReducer';
import ControlReducer from './ControlReducer';

export default combineReducers({
  auth: AuthReducer,
  status: StatusReducer,
  item: ItemReducer,
  program: ProgramReducer,
  session: SessionReducer,
  history: TrackerReducer,
  select: SelectItemReducer,
  profile: ProfileReducer,
  controls: ControlReducer
});
