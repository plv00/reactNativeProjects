import { combineReducers } from 'redux';
import LibaryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibaryReducer,
  selectedLibraryId: SelectionReducer
});
