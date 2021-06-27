import React from 'react';
import '../styles/elements-styles/total-styles.css';

const Total = props => {
    return (
        <div className="total-container">
            <div className="total-title" style={props.titleStyle}>
                {props.title}
            </div>

            <div className="total-value">
                {props.value}
            </div>
        </div>
    );
}

export default Total;