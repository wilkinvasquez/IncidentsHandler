import React, { useContext, useCallback, useState, useEffect, Fragment } from 'react';
import '../../styles/forms-styles/form-styles.css';
import Input from '../../elements/input';
import Select from '../../elements/select';
import Button from '../../elements/button';
import AlertTypes from '../../constants/alert-types';
import AppContext from '../../context/app-context';
import IncidentsService from '../../services/incidents-service';
import DepartmentsService from '../../services/departments-service';
import UsersService from '../../services/users-service';
import PrioritiesService from '../../services/priorities-service';
import TextArea from '../../elements/textarea';
import ToggleSwitch from '../../elements/toggle-switch';
import Comments from '../../elements/comments';
import Comment from '../../elements/comment';
import moment from 'moment';
import Separator from '../../elements/separator';
import IncidentsHistoriesService from '../../services/incidents-histories-service';

const IncidentForm = () => {
    const [state, setState] = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [users, setUsers] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [incidentComments, setIncidentComments] = useState([]);
    const [incidentId, setIncidentId] = useState(null);
    const [commentsState, setCommentsState] = useState({
        comment: "",
        showButton: true,
        showTextarea: false,

    });
    const [incident, setIncident] = useState({
        id: 0,
        userAssignedId: 0,
        title: '',
        description: '',
        closeComment: '',
        userReportId: 0,
        priorityId: 0,
        departmentId: 0
    });

    useEffect(() => {
        setIsEdit(state.formPayload !== null);
        getAllDepartments();
        getAllUsers();
        getAllPriorities();
    }, []);

    useEffect(() => {
        if (isEdit) {
            setIncident(state.formPayload);
            setIncidentId(state.formPayload.id);
        }
    }, [isEdit]);

    useEffect(() => {
        if (incidentId) {
            setState(state => ({
                ...state,
                isLoadingVisible: true,
                isAlertVisible: false
            }));

            getIncidentComments();
        }
    }, [incidentId]);

    const save = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        if (isEdit) {
            IncidentsService.update(incident)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Incident updated successfully!'
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
            IncidentsService.create(incident)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Incident created successfully!'
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

    const getAllDepartments = useCallback(() => {
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
    });

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

    const getAllPriorities = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        PrioritiesService.getAll()
            .then(result => {
                setPriorities(result);

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

    const getIncidentComments = useCallback(() => {
        IncidentsService.getIncidentComments(incident.id)
            .then(result => {
                setIncidentComments(result);

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

    const saveComment = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        let incidentHistory = {
            comment: commentsState.comment,
            incidentId: incidentId
        }

        IncidentsHistoriesService.create(incidentHistory)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false
                }));

                setCommentsState({
                    ...commentsState,
                    comment: '',
                    showButton: true,
                    showTextarea: false
                });

                getIncidentComments();
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
        <div className="form-container col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
            <div className="form-sub-container">
                <div className="form-title">
                    {isEdit ? 'Edit' : 'Create'} incident
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
                            title={'Title'}
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
                            value={incident.title}
                            callback={event => setIncident({
                                ...incident,
                                title: event.target.value
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'Priority'}
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
                            value={incident.priorityId}
                            options={priorities.map(priority => ({
                                id: priority.id,
                                name: priority.name
                            }))}
                            callback={event => setIncident({
                                ...incident,
                                priorityId: parseInt(event.target.value)
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'User report'}
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
                            value={incident.userReportId}
                            options={users.map(user => ({
                                id: user.id,
                                name: `${user.name} ${user.lastname}`
                            }))}
                            callback={event => setIncident({
                                ...incident,
                                userReportId: parseInt(event.target.value)
                            })}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'User assigned'}
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
                            value={incident.userAssignedId}
                            options={users.map(user => ({
                                id: user.id,
                                name: `${user.name} ${user.lastname}`
                            }))}
                            callback={event => setIncident({
                                ...incident,
                                userAssignedId: parseInt(event.target.value)
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
                            value={incident.departmentId}
                            options={departments.map(department => ({
                                id: department.id,
                                name: department.name
                            }))}
                            callback={event => setIncident({
                                ...incident,
                                departmentId: parseInt(event.target.value)
                            })}
                        />
                    </div>

                    <Separator />

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <TextArea
                            title={'Description'}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            textAreaStyle={{
                                border: 0,
                                outline: 0,
                                backgroundColor: '#F1F6FF',
                                borderBottom: '2px solid #2B85FF',
                                color: '#767676',
                                padding: '5px 10px 5px 10px',
                                borderRadius: '5px',
                                height: '150px'

                            }}
                            value={incident.description}
                            callback={event => setIncident({
                                ...incident,
                                description: event.target.value
                            })}
                        />
                    </div>

                    {
                        (() => {
                            if (isEdit) {
                                return (
                                    <Fragment>

                                        <Separator />

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            {
                                                (() => {
                                                    if (incidentComments.length !== 0) {
                                                        return (
                                                            <Comments
                                                                title={'Comments'}
                                                                titleStyle={{
                                                                    color: '#2B85FF',
                                                                    textTransform: 'uppercase',
                                                                    fontSize: '10pt'
                                                                }}
                                                                commentsStyle={{
                                                                    border: 0,
                                                                    outline: 0,
                                                                    backgroundColor: '#DCE6F8',
                                                                    color: '#767676',
                                                                    padding: '5px 10px 10px 10px',
                                                                    borderRadius: '5px',
                                                                    overflow: 'auto'
                                                                }}
                                                            >

                                                                {
                                                                    incidentComments.map((incidentHistory, index) => {
                                                                        return (
                                                                            <Comment
                                                                                key={index}
                                                                                username={`${incidentHistory.creatorName} ${incidentHistory.creatorLastname}`}
                                                                                datetime={moment(incidentHistory.creationTime).format('YYYY/MM/DD hh:mm:ss')}
                                                                                text={incidentHistory.comment}
                                                                            />
                                                                        );
                                                                    })
                                                                }

                                                            </Comments>
                                                        )
                                                    }
                                                })()
                                            }

                                            {
                                                (() => {
                                                    if (commentsState.showTextarea) {
                                                        return (
                                                            <Fragment>
                                                                <TextArea
                                                                    title={'Comment'}
                                                                    titleStyle={{
                                                                        color: '#2B85FF',
                                                                        textTransform: 'uppercase',
                                                                        fontSize: '10pt'
                                                                    }}
                                                                    textAreaStyle={{
                                                                        border: 0,
                                                                        outline: 0,
                                                                        backgroundColor: '#F1F6FF',
                                                                        borderBottom: '2px solid #2B85FF',
                                                                        color: '#767676',
                                                                        padding: '5px 10px 5px 10px',
                                                                        borderRadius: '5px',
                                                                        height: '150px'
                                                                    }}
                                                                    value={commentsState.comment}
                                                                    callback={event => setCommentsState({
                                                                        ...commentsState,
                                                                        comment: event.target.value
                                                                    })}
                                                                />

                                                                <Button
                                                                    title={'Cancel comment'}
                                                                    type={"button"}
                                                                    style={{
                                                                        color: '#FFFFFF',
                                                                        backgroundColor: '#2B85FF',
                                                                        height: '35px',
                                                                        width: '140px',
                                                                        float: 'left',
                                                                        fontSize: '10pt',
                                                                        margin: '12px 25px 10px 0'
                                                                    }}
                                                                    callback={() => setCommentsState({
                                                                        ...commentsState,
                                                                        comment: '',
                                                                        showButton: true,
                                                                        showTextarea: false
                                                                    })}
                                                                />

                                                                <Button
                                                                    title={'Save comment'}
                                                                    type={"button"}
                                                                    style={{
                                                                        color: '#FFFFFF',
                                                                        backgroundColor: '#00A555',
                                                                        height: '35px',
                                                                        width: '140px',
                                                                        float: 'left',
                                                                        fontSize: '10pt',
                                                                        margin: '12px 0 10px 0'
                                                                    }}
                                                                    callback={() => saveComment()}
                                                                />
                                                            </Fragment>
                                                        )
                                                    }
                                                })()
                                            }

                                            {
                                                (() => {
                                                    if (commentsState.showButton) {
                                                        return (
                                                            <Button
                                                                title={'Leave comment'}
                                                                type={"button"}
                                                                style={{
                                                                    color: '#FFFFFF',
                                                                    backgroundColor: '#2B85FF',
                                                                    height: '35px',
                                                                    width: '140px',
                                                                    float: 'left',
                                                                    fontSize: '10pt',
                                                                    marginBottom: '10px',
                                                                    marginTop: '5px'
                                                                }}
                                                                callback={() => setCommentsState({
                                                                    ...commentsState,
                                                                    showButton: false,
                                                                    showTextarea: true
                                                                })}
                                                            />
                                                        )
                                                    }
                                                })()
                                            }
                                        </div>

                                        <Separator />

                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <ToggleSwitch
                                                title={'Close incident'}
                                                titleStyle={{
                                                    color: '#2B85FF',
                                                    textTransform: 'uppercase',
                                                    fontSize: '10pt'
                                                }}
                                                active={incident.isClosed}
                                                callback={active => setIncident({
                                                    ...incident,
                                                    isClosed: active,
                                                    closeComment: ''
                                                })}
                                            />
                                        </div>
                                    </Fragment>
                                )
                            }
                        })()
                    }

                    {
                        (() => {
                            if (incident.isClosed) {
                                return (
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <TextArea
                                            title={'Close comment'}
                                            titleStyle={{
                                                color: '#2B85FF',
                                                textTransform: 'uppercase',
                                                fontSize: '10pt'
                                            }}
                                            textAreaStyle={{
                                                border: 0,
                                                outline: 0,
                                                backgroundColor: '#F1F6FF',
                                                borderBottom: '2px solid #2B85FF',
                                                color: '#767676',
                                                padding: '5px 10px 5px 10px',
                                                borderRadius: '5px',
                                                height: '150px'
                                            }}
                                            value={incident.closeComment}
                                            callback={event => setIncident({
                                                ...incident,
                                                closeComment: event.target.value
                                            })}
                                        />
                                    </div>
                                )
                            }
                        })()
                    }

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
                            alertText: `Are you sure to ${isEdit ? 'edit' : 'create'} this incident?`,
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

export default IncidentForm;