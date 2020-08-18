import {combineReducers} from 'redux';

import * as PostReducer from './post_redcuer';
import * as UserReducer from './userReducers';

export default combineReducers({
    posts: PostReducer.allPostReducer,
    users : UserReducer.getUser
})