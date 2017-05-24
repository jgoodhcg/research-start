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
            .then((data) => dispatch(libraryDataFetchSuccess(data)))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}

export function search(term) {
    return {
        type: 'TERM_SEARCHED',
        search: term
    }
}

export function selected(subject){
    return {
        type: 'SUBJECT_SELECTED',
        selected: subject
    }
}
