import React, { useState, useCallback, useEffect } from 'react';
import '../styles/elements-styles/toggle-switch-styles.css';

const ToggleSwitch = props => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    const click = useCallback(() => {
        if (!props.readOnly) {
            setActive(!active);
            props.callback(!active);
        }
    });

    return (
        <div className="toggle-switch-container">
            <div className="toggle-switch-title" style={props.titleStyle}>
                {props.title}
            </div>

            <div className={`toggle-switch-element ${active ? "toggle-switch-element-active" : ""}`} style={{ opacity: props.readOnly ? '.6' : '1' }} onClick={() => click()}>
                <div className={`toggle-switch-element-circle ${active ? "toggle-switch-element-circle-active" : ""}`}>

                </div>
            </div>
        </div>
    );
}

export default ToggleSwitch;
