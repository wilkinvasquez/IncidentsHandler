import React, { useEffect, Fragment, useState, useContext, useCallback } from 'react';
import Button from '../elements/button';
import IncidentsService from '../services/incidents-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const IncidentsScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [incidents, setIncidents] = useState([]);
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
            getAllIncidents();
        }
    }, [isMounted]);

    const getAllIncidents = useCallback(() => {
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
    });

    const removeIncident = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        IncidentsService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllIncidents();
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
                    Incidents
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
                            formType: FormTypes.INCIDENT_FORM,
                            formPayload: null,
                            formCallback: () => getAllIncidents()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Title"} textRight={"Action"} />

            <div className="section-items">
                {
                    incidents.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={item.title}
                                formType={FormTypes.INCIDENT_FORM}
                                formCallback={() => getAllIncidents()}
                                detailType={DetailTypes.INCIDENT_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removeIncident(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default IncidentsScreen;