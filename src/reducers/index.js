import { combineReducers } from 'redux';
import { libraryData, dataHasErrored, dataIsLoading } from './libraryData';
import { searchTerm } from './searchTerm';
import { selected } from './selected';
import { visibleSubjects } from './visibleSubjects';

const rootReducer = combineReducers({
    libraryData,
    dataHasErrored,
    dataIsLoading,
    searchTerm,
    selected,
    visibleSubjects
});

export default rootReducer
