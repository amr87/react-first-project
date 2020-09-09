import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
  deletePost = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const { post } = this.props;
    const p = post ? (
      <div className="post card" key={post.id}>
        <div className="card-content">
          <h4 className="card-title red-text">{post.title}</h4>
          <p className="grey-text">{post.body}</p>
          <div className="center">
            <button onClick={this.deletePost} className="btn grey">
              Delete Post
            </button>
          </div>
        </div>
      </div>
    ) : (
      <p className="center red-text">Loading Post...</p>
    );
    return <div className="container">{p}</div>;
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    post: state.posts.find((p) => p.id === parseInt(id)),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
