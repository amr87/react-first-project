import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  /**
   * render
   */
  render() {
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/posts/' + post.id}>
                <h4 className="card-title red-text">{post.title}</h4>
              </Link>
              <p className="grey-text">{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <p className="center red-text">Loading Posts...</p>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postsList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts, // map state to prop named as posts
  };
};

export default connect(mapStateToProps)(Home);
