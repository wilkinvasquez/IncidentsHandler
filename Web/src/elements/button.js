import React from 'react';
import '../styles/elements-styles/button-styles.css';

const Button = (props) => {
    return (
        <button className="button-element" type={props.type} onClick={() => props.callback()} style={props.style}>{ props.title }</button>
    );
}

export default Button;
