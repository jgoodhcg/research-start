import * as _ from 'lodash';
import Fuse from 'fuse.js';

export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool
    };
}
export function libraryDataFetchSuccess(data) {
    return {
        type: 'LIBRARY_DATA_FETCH_SUCCESS',
        data
    };
}

export function libraryDataFetch(url) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(dataIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(libraryDataFetchSuccess(data))
                dispatch(search(""))
            })
            .catch(() => dispatch(dataHasErrored(true)));
    };
}

export function setVisibleSubjects(subjects) {
    return {
        type: 'SET_VISIBLE_SUBJECTS',
        visibleSubjects: subjects
    }
}

export function search(term) {
    return (dispatch, getState) => {
        let state = getState(),
            libraryData = state.libraryData,
            searchableData = _(libraryData).keys()
                .map((key) => { return Object.assign({}, libraryData[key], { Code: key }) })
                .value(),
            options = {
                shouldSort: true,
                threshold: 0.6,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: [
                    "Code",
                    "Subject",
                    "Library.Name",
                    "Database1.Name",
                    "Database2.Name",
                    "Database3.Name"
                ]
            },
            fuse = new Fuse(searchableData, options),
            result = (term !== "" ? fuse.search(term) : _.sortBy(searchableData, sub => sub.Code))

        dispatch(setVisibleSubjects(result))
    }
}

export function selected(subject) {
    return {
        type: 'SUBJECT_SELECTED',
        selected: subject
    }
}
