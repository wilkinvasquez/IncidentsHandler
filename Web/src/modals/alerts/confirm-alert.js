import React, { useContext } from 'react';
import '../../styles/alerts-styles/alert-styles.css';
import Button from '../../elements/button';
import AppContext from '../../context/app-context';

const ConfirmAlert = props => {
    const [state, setState] = useContext(AppContext);

    return (
        <div className="alert-container confirm-alert">
            <div className="alert-image">
                <img src={require("../../assets/images/icons/warnning.png")} alt="" />
            </div>

            <div className="alert-text">
                {props.text}
            </div>

            <div className="alert-button">
                <Button 
                    title={'Accept'} 
                    type={"button"} 
                    style={{
                        color: '#0091EA',
                        backgroundColor: '#FFFFFF'
                    }}
                    callback={() => props.callback()} 
                />
            </div>

            <br />

            <div className="alert-button">
                <Button 
                    title={'Cancel'} 
                    type={"button"} 
                    style={{
                        color: '#0091EA',
                        backgroundColor: '#FFFFFF'
                    }}
                    callback={() => setState(state => ({ ...state, isAlertVisible: false }))} 
                />
            </div>
        </div>
    );
}

export default ConfirmAlert;