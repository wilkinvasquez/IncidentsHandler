import React, { useEffect, useContext, useState, Fragment, useCallback } from 'react';
import AppContext from '../context/app-context';
import ItemsHeader from '../elements/items-header';
import '../styles/elements-styles/items-header-styles.css';
import '../styles/screens-styles/home-styles.css';
import Total from '../elements/total';
import IncidentsService from '../services/incidents-service';
import UsersService from '../services/users-service';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';
import AlertTypes from '../constants/alert-types';
import Item from '../elements/item';

const HomeScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [isMounted, setIsMounted] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [incidentsStatistics, setIncidentsStatistics] = useState({
        totalUnClosedIncidents: 0,
        totalClosedIncidents: 0
    });

    useEffect(() => {
        setIsMounted(true);

        setState(state => ({
            ...state,
            location: props.location.pathname
        }));
    }, []);

    useEffect(() => {
        if (isMounted) {
            getAssignedIncidents();
        }
    }, [isMounted]);

    const getAssignedIncidents = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        let userId = JSON.parse(window.localStorage.getItem('incidentiumUser')).id;

        UsersService.getAssignedIncidents(userId)
            .then(result => {
                setIncidents(result);
                getIncidentsStatistics();

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

                getAssignedIncidents();
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

    const getIncidentsStatistics = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        IncidentsService.getIncidentsStatistics()
            .then(result => {
                setIncidentsStatistics(result);

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
        <Fragment>
            <div className="row">
                <div className="section-title col-lg-12 com-md-12 col-sm-12">
                    Home
                 </div>
            </div>

            <br />

            <div className="row">
                <div className="col-lg-6 com-md-6 col-sm-6">
                    <Total
                        title={"Unclosed incidents"}
                        value={incidentsStatistics.totalUnClosedIncidents}
                    />
                </div>

                <div className="col-lg-6 com-md-6 col-sm-6">
                    <Total
                        title={"Closed incidents"}
                        value={incidentsStatistics.totalClosedIncidents}
                    />
                </div>
            </div>

            <div id="home-section-items-title">
                My assigned incidents
            </div>

            <ItemsHeader textLeft={"Title"} textRight={"Action"} />

            <div id="home-section-items">
                {
                    incidents.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={item.title}
                                formType={FormTypes.INCIDENT_FORM}
                                formCallback={() => getAssignedIncidents()}
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

export default HomeScreen;