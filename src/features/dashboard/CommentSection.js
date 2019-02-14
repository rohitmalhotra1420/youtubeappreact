import React, { Component } from "react";
import CommentList from "./CommentList";

class CommentSection extends Component {
  state = {
    userName: "",
    commentText: ""
  };
  onNameChange = userName => {
    this.setState({ userName });
  };
  onCommentTextChange = commentText => {
    this.setState({ commentText });
  };
  handleSubmit = () => {
    const commentObj = {
      userName: this.state.userName,
      commentText: this.state.commentText
    };
    this.props.postComment(commentObj);
  };
  handleCancel = () => {
    this.setState({
      userName: "",
      commentText: ""
    });
  };
  render() {
    const { userName, commentText } = this.state;
    const { comments } = this.props;
    return (
      <div>
        <h4 className="comment-heading">Comments</h4>
        <div className="comment-input-container">
          <div className="name-input-view">
            <input
              placeholder="Your Name"
              value={userName}
              className="name-input"
              onChange={event => this.onNameChange(event.target.value)}
            />
          </div>
          <div className="comment-input-view">
            <textarea
              placeholder="Your Comment"
              value={commentText}
              className="comment-input"
              onChange={event => this.onCommentTextChange(event.target.value)}
            />
          </div>
        </div>
        <div className="comment-btn-container">
          <button className="ghost-btn comment-btn" onClick={this.handleSubmit}>
            Comment
          </button>
          <button className="ghost-btn cancel-btn" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
        <CommentList comments={comments} />
      </div>
    );
  }
}

export default CommentSection;
