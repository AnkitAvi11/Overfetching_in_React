import React, {Component} from 'react';

import {connect} from 'react-redux';

import {getPostsAndUsers} from '../../actions/postactions';
import PostCard from './PostCard';

class Posts extends Component {

    componentDidMount = () => {
        this.props.getpostanduser();
    }

    render() 
    {
        let posts = (
            <div className="d-flex justify-content-center" style={{padding:"50px"}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            </div>
        );

        if (this.props.posts.length > 0) {
            posts = this.props.posts.map((post, index) => {
                return <PostCard post={post} key={index} />
            })
        }

        return(
            <div className="container">
                {posts}
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {getpostanduser: getPostsAndUsers})(Posts);