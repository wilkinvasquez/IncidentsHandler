import React, { useContext, useCallback, useState, useEffect } from 'react';
import '../../styles/forms-styles/form-styles.css';
import Input from '../../elements/input';
import Select from '../../elements/select';
import Button from '../../elements/button';
import AlertTypes from '../../constants/alert-types';
import AppContext from '../../context/app-context';
import PositionsService from '../../services/positions-service';
import UsersService from '../../services/users-service';
import moment from 'moment';
import Separator from '../../elements/separator';

const UserForm = () => {
    const [state, setState] = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [positions, setPositions] = useState([]);
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        identificationCard: '',
        mail: '',
        phone: '',
        birthdate: null,
        username: '',
        password: '',
        positionId: 0
    });

    useEffect(() => {
        setIsEdit(state.formPayload !== null);
        getAllPositions();
    }, []);

    useEffect(() => {
        if (isEdit) {
            setUser(state.formPayload);
        }
    }, [isEdit]);

    const save = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        if (isEdit) {
            UsersService.update(user)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'User updated successfully!'
                    }));

                    state.formCallback();
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
        }
        else {
            UsersService.create(user)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'User created successfully!'
                    }));

                    state.formCallback();
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
        }
    });

    const getAllPositions = () => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        PositionsService.getAll()
            .then(result => {
                setPositions(result);

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
    }

    return (
        <div className="form-container col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
            <div className="form-sub-container">
                <div className="form-title">
                    {isEdit ? 'Edit' : 'Create'} user
                </div>

                <img
                    className="form-close"
                    src={require('../../assets/images/icons/close.png')}
                    alt=""
                    onClick={() => setState(state => ({
                        ...state,
                        isFormVisible: false
                    }))}
                />

                <div className="form-fields-container row">

                    <Separator />

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Name'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.name}
                            callback={event => setUser({
                                ...user,
                                name: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Lastname'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.lastname}
                            callback={event => setUser({
                                ...user,
                                lastname: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Identification card'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.identificationCard}
                            callback={event => setUser({
                                ...user,
                                identificationCard: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Mail'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.mail}
                            callback={event => setUser({
                                ...user,
                                mail: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Phone'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.phone}
                            callback={event => setUser({
                                ...user,
                                phone: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Birthdate'}
                            type={'date'}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={moment(user.birthdate).format('YYYY-MM-DD')}
                            callback={event => setUser({
                                ...user,
                                birthdate: moment(event.target.value).format('YYYY-MM-DD')
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Username'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.username}
                            callback={event => setUser({
                                ...user,
                                username: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Input
                            title={'Password'}
                            type="password"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676'
                            }}
                            value={user.password}
                            callback={event => setUser({
                                ...user,
                                password: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'Position'}
                            type="text"
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            inputStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676',
                                height: '27px'
                            }}
                            value={user.positionId}
                            options={positions.map(position => ({
                                id: position.id,
                                name: position.name
                            }))}
                            callback={event => setUser({
                                ...user,
                                positionId: parseInt(event.target.value)
                            })}
                        />
                    </div>

                    <Separator />

                </div>

                <div className="form-buttons-container">
                    <Button
                        title={'Save'}
                        type={"button"}
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#00A555',
                            height: '35px',
                            width: '100px',
                            float: 'right',
                            fontSize: '10pt',
                            marginLeft: '20px'
                        }}
                        callback={() => setState(state => ({
                            ...state,
                            isAlertVisible: true,
                            alertType: AlertTypes.CONFIRM,
                            alertText: `Are you sure to ${isEdit ? 'edit' : 'create'} this user?`,
                            alertCallback: () => save()
                        }))}
                    />

                    <Button
                        title={'Cancel'}
                        type={"button"}
                        style={{
                            color: '#FFFFFF',
                            backgroundColor: '#2B85FF',
                            height: '35px',
                            width: '100px',
                            float: 'right',
                            fontSize: '10pt'
                        }}
                        callback={() => setState(state => ({
                            ...state,
                            isFormVisible: false
                        }))}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserForm;