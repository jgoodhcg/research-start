export function selected(state = {}, action) {
    switch (action.type) {
    case 'SUBJECT_SELECTED':
        return action.selected;
    default:
        return state;
    }
}
