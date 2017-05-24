import { combineReducers } from 'redux';
import { libraryData, dataHasErrored, dataIsLoading } from './libraryData';
import { search } from './search';
import { selected } from './selected';

const rootReducer = combineReducers({
    libraryData,
    dataHasErrored,
    dataIsLoading,
    search,
    selected
});

export default rootReducer
