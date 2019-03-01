import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import {blogAction} from '../actions'

class PostsContainer extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        return _.map(this.props.posts, (post) => {
            return (
                <li key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {

        return (
            <div>
                <h3>POSTS LIST</h3>
                <ul>
                    {this.renderPost()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts: blogAction.fetchPost})(PostsContainer);