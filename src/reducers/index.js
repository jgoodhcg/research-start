import { combineReducers } from 'redux';
import { libraryData, dataHasErrored, dataIsLoading, dataHasLoaded } from './libraryData';
import { selected } from './selected';
import { visibleSubjects } from './visibleSubjects';

const rootReducer = combineReducers({
    libraryData,
    dataHasErrored,
    dataIsLoading,
    dataHasLoaded,
    selected,
    visibleSubjects
});

export default rootReducer
