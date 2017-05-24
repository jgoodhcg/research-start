export function search(state = "", action) {
    switch (action.type) {
    case 'TERM_SEARCHED':
        return action.search;
    default:
        return state;
    }
}
