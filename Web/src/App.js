import React, { Fragment, useContext, useEffect } from 'react';
import './App.css';
import Alert from './modals/alerts/alert';
import AppContext from './context/app-context';
import Loading from './modals/loading';
import SplashScreen from './screens/splash-screen';
import {
    Route,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import Routes from './routing/routes';
import LoginScreen from './screens/login-screen';
import MainTemplate from './templates/main-template';
import Form from './modals/forms/form';
import Detail from './modals/details/detail';
import NotFoundScreen from './screens/not-found-screen';

const App = () => {
    const [state, setState] = useContext(AppContext);

    useEffect(() => {
        // Verify if user is signed in.

        let token = document.cookie.split(';').filter(element => element.includes('incidentiumToken'))[0];

        if (token !== undefined) {
            token = token.split('=')[1];
        }

        if (token === undefined || token.trim() === '') {
            setState(state => ({
                ...state,
                isSignedIn: false
            }));
        }
        else {
            setState(state => ({
                ...state,
                isSignedIn: true
            }));
        }

        // SplasScreen.

        setState(state => ({
            ...state,
            isSplashScreenVisible: true
        }));

        setTimeout(() => {
            setState(state => ({
                ...state,
                isSplashScreenVisible: false
            }));
        }, 2000);
    }, []);

    return (
        <Fragment>
            {
                (() => {
                    if (state.isSplashScreenVisible) {
                        return <SplashScreen />
                    }
                })()
            }

            {
                (() => {
                    if (state.isLoadingVisible) {
                        return <Loading />
                    }
                })()
            }

            {
                (() => {
                    if (state.isAlertVisible) {
                        return <Alert />
                    }
                })()
            }

            {
                (() => {
                    if (state.isFormVisible) {
                        return <Form />
                    }
                })()
            }

            {
                (() => {
                    if (state.isDetailVisible) {
                        return <Detail />
                    }
                })()
            }

            <Router>
                <Route path={'/login'} component={LoginScreen} />
                <Route component={NotFoundScreen} />

                {
                    Routes.map((route, index) => {
                        return (
                            <Route key={index} exact={route.path === '/'} path={route.path} render={(props) => (
                                (() => {
                                    if (state.isSignedIn) {
                                        return (
                                            <MainTemplate>
                                                <route.component {...props} />
                                            </MainTemplate>
                                        )
                                    }
                                    else {
                                        return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
                                    }
                                })()
                            )} />
                        );
                    })
                }
            </Router>
        </Fragment>
    );
}

export default App;
