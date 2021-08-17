import React, { useState, useCallback, useContext } from 'react';
import '../styles/screens-styles/login-screen-styles.css';
import Input from '../elements/input';
import Button from '../elements/button';
import UsersService from '../services/users-service';
import AlertTypes from '../constants/alert-types';
import AppContext from '../context/app-context';
import {
    withRouter,
    Redirect
} from 'react-router-dom';

const LoginScreen = (props) => {
    const [state, setState] = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = useCallback((event) => {
        event.preventDefault();

        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        UsersService.login(username, password)
            .then(result => {
                document.cookie = `incidentsHandlerToken=${result.token};path=/;`;
                delete result.token;
                window.localStorage.setItem('incidentsHandlerUser', JSON.stringify(result));

                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isSignedIn: true
                }));

                props.history.push('/');
            })
            .catch(error => {
                setState(state => ({
                    ...state,
                    isAlertVisible: true,
                    alertType: AlertTypes.ERROR,
                    alertText: error,
                    isLoadingVisible: false
                }));
            });
    });

    return (
        (() => {
            if (state.isSignedIn) {
                let from = props.location.state === undefined ? '/' : props.location.state.from;

                return <Redirect to={{ pathname: from }} />
            }
            else {
                return (
                    <form id="login-container" onSubmit={login}>
                        <div id="login-sub-container">
                            <img id="imagotype" src={require('../assets/images/incidents-handler-imagotype.png')} alt="" />

                            <div className="login-input-container">
                                <Input
                                    title={'Username'}
                                    type="text"
                                    titleStyle={{
                                        color: '#FFFFFF',
                                        textTransform: 'uppercase',
                                        fontSize: '10pt'
                                    }}
                                    inputStyle={{
                                        border: 0,
                                        outline: 0,
                                        background: 'transparent',
                                        borderBottom: '2px solid #FFFFFF',
                                        color: '#FFFFFF'
                                    }}
                                    callback={event => setUsername(event.target.value)}
                                />
                            </div>

                            <div className="login-input-container">
                                <Input
                                    title={'Password'}
                                    type="password"
                                    titleStyle={{
                                        color: '#FFFFFF',
                                        textTransform: 'uppercase',
                                        fontSize: '10pt'
                                    }}
                                    inputStyle={{
                                        border: 0,
                                        outline: 0,
                                        background: 'transparent',
                                        borderBottom: '2px solid #FFFFFF',
                                        color: '#FFFFFF'
                                    }}
                                    callback={event => setPassword(event.target.value)}
                                />
                            </div>

                            <div id="login-button-container">
                                <Button
                                    title={'Sign in'}
                                    type={"submit"}
                                    style={{
                                        color: '#2B85FF',
                                        backgroundColor: '#FFFFFF'
                                    }}
                                    callback={() => { }}
                                />
                            </div>
                        </div>

                        <div id="login-transparent-element">

                        </div>
                    </form>
                );
            }
        })()
    );
}

export default withRouter(LoginScreen);