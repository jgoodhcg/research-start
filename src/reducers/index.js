import { combineReducers } from 'redux';
import { libraryData, dataHasErrored, dataIsLoading } from './libraryData';
import { search } from './search';
import { selected } from './selected';
import { visibleSubjects } from './visibleSubjects';

const rootReducer = combineReducers({
    libraryData,
    dataHasErrored,
    dataIsLoading,
    search,
    selected,
    visibleSubjects
});

export default rootReducer
