import React from 'react';
import '../styles/elements-styles/detail-styles.css';

const Detail = props => {
    return (
        <div className="detail-element-container">
            <div className="detail-element-title" style={props.titleStyle}>
                {props.title}
            </div>

            <div className="detail-element-value" style={props.valueStyle}>
                {props.value}
            </div>
        </div>
    );
}

export default Detail;