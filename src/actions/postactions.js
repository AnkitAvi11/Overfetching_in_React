import * as _ from 'lodash';

export const getPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(getAllPostAction());
        let userIds = _.uniq(_.map(getState().posts,'userId'));
        userIds.forEach(id => {
            dispatch(getUser(id));
        })
    }   
}

export const getAllPostAction = () => {
    return async (dispatch) => {
        let allPosts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        dispatch({
            type : "GET_POSTS",
            payload : allPosts
        })
    }
}

export const getUser = (userId) => {
    return async (dispatch) => {
        let user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()
        dispatch({
            type : 'GET_USER',
            payload : user
        })
    }
}
