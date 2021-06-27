import React, { useContext } from 'react';
import '../../styles/alerts-styles/alert-styles.css';
import Button from '../../elements/button';
import AppContext from '../../context/app-context';

const ErrorAlert = props => {
    const [state, setState] = useContext(AppContext);

    return (
        <div className="alert-container error-alert">
            <div className="alert-image">
                <img src={require("../../assets/images/icons/error.png")} alt=""/>
            </div>

            <div className="alert-text">
                { props.text }
            </div>

            <div className="alert-button">
                <Button 
                    title={'Ok'} 
                    type={"button"} 
                    style={{
                        color: '#D32F2F',
                        backgroundColor: '#FFFFFF'
                    }}
                    callback={() => setState(state => ({ ...state, isAlertVisible: false }))} 
                />
            </div>
        </div>
    );
}

export default ErrorAlert;