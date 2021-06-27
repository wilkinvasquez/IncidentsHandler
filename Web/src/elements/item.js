import React, { useContext } from 'react';
import '../styles/elements-styles/item-styles.css';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';

const Item = props => {
    const [state, setState] = useContext(AppContext);

    return (
        <div className="item">
            {props.title}

            <img
                className="item-icon"
                src={require('../assets/images/icons/trash.png')}
                alt=""
                onClick={
                    () => setState(state => ({
                        ...state,
                        isAlertVisible: true,
                        alertType: AlertTypes.CONFIRM,
                        alertText: `Are you sure to delete this item?`,
                        alertCallback: () => props.deleteCallback(props.formPayload.id)
                    }))
                }
            />

            <img
                className="item-icon"
                src={require('../assets/images/icons/eye.png')}
                alt=""
                onClick={
                    () => setState(state => ({
                        ...state,
                        isDetailVisible: true,
                        detailType: props.detailType,
                        detailPayload: props.detailPayload
                    }))
                }
            />

            <img
                className="item-icon"
                src={require('../assets/images/icons/edit.png')}
                alt=""
                onClick={
                    () => setState(state => ({
                        ...state,
                        isFormVisible: true,
                        formType: props.formType,
                        formPayload: props.formPayload,
                        formCallback: () => props.formCallback()
                    }))
                }
            />
        </div>
    );
}

export default Item;