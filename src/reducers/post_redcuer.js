
export const allPostReducer = (initialState = [], action) => {
    if (action.type === 'GET_POSTS') {
        return action.payload
    }
    return initialState;
}
