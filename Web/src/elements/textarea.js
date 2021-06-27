import React from 'react';
import '../styles/elements-styles/textarea-styles.css';

const TextArea = props => {
    return (
        <div className="textarea-container">
            <div className="textarea-title" style={props.titleStyle}>
                {props.title}
            </div>

            <textarea className="textarea-field" style={props.textAreaStyle} value={props.value} onChange={event => props.callback(event)}></textarea>
        </div>
    );
}

export default TextArea;