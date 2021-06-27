import React from 'react';
import '../styles/elements-styles/select-styles.css';

const Select = props => {
    return (
        <div className="select-container">
            <div className="select-title" style={props.titleStyle}>
                {props.title}
            </div>

            <select className="select-field" type={props.type} style={props.inputStyle} value={props.value} onChange={event => props.callback(event)}>
                <option value="0">-</option>
                {
                    props.options.map((option, index) => {
                        return (
                            <option key={index} value={option.id}>{option.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default Select;