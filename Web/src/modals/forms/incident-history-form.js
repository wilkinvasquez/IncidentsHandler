import React, { useContext, useCallback, useState, useEffect } from 'react';
import '../../styles/forms-styles/form-styles.css';
import TextArea from '../../elements/textarea';
import Select from '../../elements/select';
import Button from '../../elements/button';
import AlertTypes from '../../constants/alert-types';
import AppContext from '../../context/app-context';
import IncidentsHistoriesService from '../../services/incidents-histories-service';
import IncidentsService from '../../services/incidents-service';

const IncidentHistoryForm = () => {
    const [state, setState] = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [incidentHistory, setIncidentHistory] = useState({
        comment: '',
        incidentId: 0
    });

    useEffect(() => {
        setIsEdit(state.formPayload !== null);
        getAllIncidents();
    }, []);

    useEffect(() => {
        if (isEdit) {
            setIncidentHistory(state.formPayload);
        }
    }, [isEdit]);

    const save = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        if (isEdit) {
            IncidentsHistoriesService.update(incidentHistory)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Incident history updated successfully!'
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
            IncidentsHistoriesService.create(incidentHistory)
                .then(() => {
                    setState(state => ({
                        ...state,
                        isLoadingVisible: false,
                        isFormVisible: false,
                        isAlertVisible: true,
                        alertType: AlertTypes.SUCCESS,
                        alertText: 'Incident history created successfully!'
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

    const getAllIncidents = () => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        IncidentsService.getAll()
            .then(result => {
                setIncidents(result);

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
                    {isEdit ? 'Edit' : 'Create'} incident history
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
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Select
                            title={'Incident'}
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
                            value={incidentHistory.incidentId}
                            options={incidents.map(incident => ({
                                id: incident.id,
                                name: incident.title
                            }))}
                            callback={event => setIncidentHistory({
                                ...incidentHistory,
                                incidentId: parseInt(event.target.value)
                            })}
                        />
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
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
                            value={incidentHistory.comment}
                            callback={event => setIncidentHistory({
                                ...incidentHistory,
                                comment: event.target.value
                            })}
                        />
                    </div>
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

export default IncidentHistoryForm;