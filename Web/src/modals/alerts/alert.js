import React, { useContext } from 'react';
import '../../styles/alerts-styles/alert-styles.css';
import ErrorAlert from './error-alert';
import SuccessAlert from './success-alert';
import WarnningAlert from './warnning-alert';
import ConfirmAlert from './confirm-alert';
import AppContext from '../../context/app-context';
import AlertTypes from '../../constants/alert-types';

const Alert = () => {
    const [state, setState] = useContext(AppContext);

    return (
        <div id="alerts-container">
            {
                (() => {
                    switch (state.alertType) {
                        case AlertTypes.SUCCESS:
                            return <SuccessAlert text={state.alertText} />
                        case AlertTypes.WARNNING:
                            return <WarnningAlert text={state.alertText} />
                        case AlertTypes.ERROR:
                            return <ErrorAlert text={state.alertText} />
                        case AlertTypes.CONFIRM:
                            return <ConfirmAlert text={state.alertText} callback={state.alertCallback} />
                    }
                })()
            }
        </div>
    );
}

export default Alert;