import React from 'react';
import '../styles/elements-styles/input-styles.css';

const Input = props => {
    return (
        <div className="input-container">
            <div className="input-title" style={props.titleStyle}>
                {props.title}
            </div>

            <input className="input-field" type={props.type} style={props.inputStyle} value={props.value} onChange={event => props.callback(event)} />
        </div>
    );
}

export default Input;