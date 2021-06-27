import React from 'react';
import '../styles/elements-styles/comments-styles.css';

const Comments = props => {
    return (
        <div className="comments-container">
            <div className="comments-title" style={props.titleStyle}>
                {props.title}
            </div>

            <div className="comments-field" style={props.commentsStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default Comments;