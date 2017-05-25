import { combineReducers } from 'redux';
import { libraryData, dataHasErrored, dataIsLoading } from './libraryData';
import { selected } from './selected';
import { visibleSubjects } from './visibleSubjects';

const rootReducer = combineReducers({
    libraryData,
    dataHasErrored,
    dataIsLoading,
    selected,
    visibleSubjects
});

export default rootReducer
