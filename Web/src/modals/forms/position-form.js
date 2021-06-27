import React, { useContext, useCallback, useState, useEffect } from 'react';
import '../../styles/forms-styles/form-styles.css';
import Input from '../../elements/input';
import Select from '../../elements/select';
import Button from '../../elements/button';
import AlertTypes from '../../constants/alert-types';
import AppContext from '../../context/app-context';
import PositionsService from '../../services/positions-service';
import DepartmentsService from '../../services/departments-service';
import Separator from '../../elements/separator';

const PositionForm = () => {
    const [state, setState] = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [position, setPosition] = useState({
        name: '',
        departmentId: 0
    });

    useEffect(() => {
        setIsEdit(state.formPayload !== null);
        getAllDepartments();
    }, []);

    useEffect(() => {
        if (isEdit) {
            setPosition(state.formPayload);
        }
    }, [isEdit]);

    const save = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        if (isEdit) {
            PositionsService.update(position)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Position updated successfully!'
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
            PositionsService.create(position)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Position created successfully!'
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

    const getAllDepartments = () => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        DepartmentsService.getAll()
            .then(result => {
                setDepartments(result);

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
                    {isEdit ? 'Edit' : 'Create'} position
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
                            value={position.name}
                            callback={event => setPosition({
                                ...position,
                                name: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'Department'}
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
                            value={position.departmentId}
                            options={departments.map(department => ({
                                id: department.id,
                                name: department.name
                            }))}
                            callback={event => setPosition({
                                ...position,
                                departmentId: parseInt(event.target.value)
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
                            alertText: `Are you sure to ${isEdit ? 'edit' : 'create'} this position?`,
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

export default PositionForm;