import React, { useEffect, Fragment, useState, useContext, useCallback } from 'react';
import Button from '../elements/button';
import UsersService from '../services/users-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const UsersScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [users, setUsers] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        setState(state => ({
            ...state,
            location: props.location.pathname
        }));
    }, []);

    useEffect(() => {
        if (isMounted) {
            getAllUsers();
        }
    }, [isMounted]);

    const getAllUsers = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        UsersService.getAll()
            .then(result => {
                setUsers(result);

                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isSignedIn: true
                }));
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

    const removeUser = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        UsersService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllUsers();
            })
            .catch(error => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.ERROR,
                    alertText: error,
                }));
            });
    });

    return (
        <Fragment>
            <div className="row">
                <div className="section-title col-lg-6 com-md-6 col-sm-6">
                    Users
                </div>

                <div className="col-lg-6 com-md-6 col-sm-6">
                    <Button
                        title={'Create'}
                        type={"button"}
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#2B85FF',
                            height: '35px',
                            width: '100px',
                            float: 'right',
                            fontSize: '10pt',
                            marginTop: '8px'
                        }}
                        callback={() => setState(state => ({
                            ...state,
                            isFormVisible: true,
                            formType: FormTypes.USER_FORM,
                            formPayload: null,
                            formCallback: () => getAllUsers()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Full name"} textRight={"Action"} />

            <div className="section-items">
                {
                    users.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={`${item.name} ${item.lastname}`}
                                formType={FormTypes.USER_FORM}
                                formCallback={() => getAllUsers()}
                                detailType={DetailTypes.USER_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removeUser(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default UsersScreen;