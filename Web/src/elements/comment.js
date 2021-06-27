import React from 'react';
import '../styles/elements-styles/comments-styles.css';

const Comment = props => {
    return (
        <div className="comment-container">
            <div className="comment-username" style={props.usernameStyle}>
                {props.username}
            </div>

            <div className="comment-datetime" style={props.commentDatetimeStyle}>
                {props.datetime}
            </div>

            <div className="comment-text" style={props.commentTextStyle}>
                {props.text}
            </div>
        </div>
    );
}

export default Comment;