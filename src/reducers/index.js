/**
 * Created by shuaiwang on 3/13/18.
 */
import { combineReducers } from 'redux';
import LibraryReducer from './libraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,  //list of libraries shoting to users
    selectedLibraryId: SelectionReducer
});