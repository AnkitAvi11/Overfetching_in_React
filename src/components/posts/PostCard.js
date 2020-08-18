import React from 'react';

import {connect} from 'react-redux';

class PostCard extends React.Component {
    render() {
        let user = "Loading user ..."
        if(this.props.user!==undefined) {
            user = this.props.user.name
        }

        return (
            <div className="card">
                <div className="card-header">{this.props.post.title}</div>
                <div className="card-body">{this.props.post.body}</div>
                <div className="card-footer">{user}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        user : state.users.find(user => user.id === ownprops.post.userId)
    }
}

export default connect(mapStateToProps)(PostCard);