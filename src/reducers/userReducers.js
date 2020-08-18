export const getUser = (state=[], action) => {
    if(action.type === 'GET_USER') {
        return [
            ...state, 
            action.payload
        ]
    }
    return state;
}