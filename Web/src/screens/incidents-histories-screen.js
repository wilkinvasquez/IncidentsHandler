import React, { useEffect, Fragment, useState, useContext, useCallback } from 'react';
import Button from '../elements/button';
import IncidentsHistoriesService from '../services/incidents-histories-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const IncidentsHistoriesScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [incidentsHistories, setIncidentsHistories] = useState([]);
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
            getAllIncidentsHistories();
        }
    }, [isMounted]);

    const getAllIncidentsHistories = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        IncidentsHistoriesService.getAll()
            .then(result => {
                setIncidentsHistories(result);

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

    const removeIncidentHistory = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        IncidentsHistoriesService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllIncidentsHistories();
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
                    Incidents histories
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
                            formType: FormTypes.INCIDENT_HISTORY_FORM,
                            formPayload: null,
                            formCallback: () => getAllIncidentsHistories()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Comment"} textRight={"Action"} />

            <div className="section-items">
                {
                    incidentsHistories.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={`${item.comment.substring(0, 75)}...`}
                                formType={FormTypes.INCIDENT_HISTORY_FORM}
                                formCallback={() => getAllIncidentsHistories()}
                                detailType={DetailTypes.INCIDENT_HISTORY_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removeIncidentHistory(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default IncidentsHistoriesScreen;