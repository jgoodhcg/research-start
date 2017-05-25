export function visibleSubjects(state = [], action) {
    switch (action.type) {
    case 'SET_VISIBLE_SUBJECTS':
        return action.visibleSubjects;
    default:
        return state;
    }
}

