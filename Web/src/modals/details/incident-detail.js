import React, { useContext, useCallback, useState, useEffect, Fragment } from 'react';
import '../../styles/details-styles/detail-styles.css';
import Button from '../../elements/button';
import AlertTypes from '../../constants/alert-types';
import AppContext from '../../context/app-context';
import IncidentsService from '../../services/incidents-service';
import DepartmentsService from '../../services/departments-service';
import UsersService from '../../services/users-service';
import PrioritiesService from '../../services/priorities-service';
import ToggleSwitch from '../../elements/toggle-switch';
import Comments from '../../elements/comments';
import Comment from '../../elements/comment';
import Separator from '../../elements/separator';
import Detail from '../../elements/detail';
import moment from 'moment';

const IncidentDetail = () => {
    const [state, setState] = useContext(AppContext);
    const [incident, setIncident] = useState({});
    const [department, setDepartment] = useState({});
    const [userAssigned, setUserAssigned] = useState({});
    const [userReport, setUserReport] = useState({});
    const [priority, setPriority] = useState({});
    const [incidentComments, setIncidentComments] = useState([]);

    useEffect(() => {
        setIncident(state.detailPayload);
    }, []);

    useEffect(() => {
        if (incident.id !== undefined) {
            getDepartment();
            getUserAssigned();
            getUserReport();
            getPriority();
            getIncidentComments();
        }
    }, [incident]);

    const getDepartment = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        DepartmentsService.getById(incident.departmentId)
            .then(result => {
                setDepartment(result);

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

    const getUserAssigned = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        UsersService.getById(incident.userAssignedId)
            .then(result => {
                setUserAssigned(result);

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

    const getUserReport = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        UsersService.getById(incident.userReportId)
            .then(result => {
                setUserReport(result);

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

    const getPriority = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        PrioritiesService.getById(incident.priorityId)
            .then(result => {
                setPriority(result);

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

    return (
        <div className="detail-container col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
            <div className="detail-sub-container">
                <div className="detail-title">
                    User details
                </div>

                <img
                    className="detail-close"
                    src={require('../../assets/images/icons/close.png')}
                    alt=""
                    onClick={() => setState(state => ({
                        ...state,
                        isDetailVisible: false
                    }))}
                />

                <div className="detail-fields-container row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Detail
                            title={'Title'}
                            value={incident.title}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Detail
                            title={'Priority'}
                            value={priority.name}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Detail
                            title={'User report'}
                            value={`${userReport.name} ${userReport.lastname}`}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Detail
                            title={'User assigned'}
                            value={`${userAssigned.name} ${userAssigned.lastname}`}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Detail
                            title={'Department'}
                            value={department.name}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <Detail
                            title={'Description'}
                            value={incident.description}
                            titleStyle={{
                                color: '#2B85FF',
                                textTransform: 'uppercase',
                                fontSize: '10pt'
                            }}
                            valueStyle={{
                                border: 0,
                                outline: 0,
                                background: 'transparent',
                                color: '#767676'
                            }}
                        />
                    </div>

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
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <ToggleSwitch
                            title={'Close incident'}
                            readOnly={true}
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

                    {
                        (() => {
                            if (incident.isClosed && incident.closeComment.trim() !== '') {
                                return (
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <Detail
                                            title={'Close comment'}
                                            value={incident.closeComment}
                                            titleStyle={{
                                                color: '#2B85FF',
                                                textTransform: 'uppercase',
                                                fontSize: '10pt'
                                            }}
                                            valueStyle={{
                                                border: 0,
                                                outline: 0,
                                                background: 'transparent',
                                                color: '#767676'
                                            }}
                                        />
                                    </div>
                                )
                            }
                        })()
                    }
                </div>

                <div className="detail-buttons-container">
                    <Button
                        title={'Close'}
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
                            isDetailVisible: false
                        }))}
                    />
                </div>
            </div>
        </div>
    );
}

export default IncidentDetail;