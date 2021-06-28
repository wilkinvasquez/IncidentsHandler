import React, { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../context/app-context';
import Button from '../elements/button';
import { withRouter } from 'react-router-dom';
import '../styles/elements-styles/header-styles.css';
import AlertTypes from '../constants/alert-types';

const Header = () => {
    const [state, setState] = useContext(AppContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('incidentsHandlerUser'));

        setUser(user);
    }, []);

    const logout = useCallback(() => {
        document.cookie = `incidentsHandlerToken=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        window.localStorage.removeItem('incidentsHandlerUser');

        setState(state => ({
            ...state,
            isSignedIn: false,
            isAlertVisible: false
        }));
    });

    return (
        <div id="header-container">
            <div id="header-user-name-container">
                {user.name} {user.lastname}
            </div>

            <Button
                title={'Logout'}
                type={"button"}
                style={{
                    color: '#B0AFAF',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #B0AFAF',
                    height: '35px',
                    width: '100px',
                    float: 'right',
                    margin: '12px 20px 0 0',
                    fontSize: '10pt'
                }}
                callback={
                    () => setState(state => ({
                        ...state,
                        isAlertVisible: true,
                        alertType: AlertTypes.CONFIRM,
                        alertText: `Are you sure to logout?`,
                        alertCallback: () => logout()
                    }))
                }
            />
        </div>
    );
}

export default withRouter(Header);