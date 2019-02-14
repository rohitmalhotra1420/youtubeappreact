import React from "react";

const CommentListItem = ({ comment }) => {
  return (
    <div>
      <div className="comment-item-view">
        <div className="user-icon-container">
          <i className="fa fa-user user-icon" aria-hidden="true" />
        </div>
        <div>
          <p className="comment-username">{comment.userName} </p>
          <p className="comment-text">{comment.commentText}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentListItem;
