import React, { useContext } from 'react';
import '../../styles/alerts-styles/alert-styles.css';
import Button from '../../elements/button';
import AppContext from '../../context/app-context';

const WarnningAlert = props => {
    const [state, setState] = useContext(AppContext);

    return (
        <div className="alert-container warnning-alert">
            <div className="alert-image">
                <img src={require("../../assets/images/icons/warnning.png")} alt="" />
            </div>

            <div className="alert-text">
                {props.text}
            </div>

            <div className="alert-button">
                <Button 
                    title={'Ok'} 
                    type={"button"} 
                    style={{
                        color: '#D56D01',
                        backgroundColor: '#FFFFFF'
                    }}
                    callback={() => setState(state => ({ ...state, isAlertVisible: false }))} 
                />
            </div>
        </div>
    );
}

export default WarnningAlert;