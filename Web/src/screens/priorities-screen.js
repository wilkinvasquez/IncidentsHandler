import React, { useEffect, Fragment, useState, useContext, useCallback } from 'react';
import Button from '../elements/button';
import PrioritiesService from '../services/priorities-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const PrioritiesScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [priorities, setPriorities] = useState([]);
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
            getAllPriorities();
        }
    }, [isMounted]);

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

    const removePriority = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        PrioritiesService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllPriorities();
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
                    Priorities
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
                            formType: FormTypes.PRIORITY_FORM,
                            formPayload: null,
                            formCallback: () => getAllPriorities()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Name"} textRight={"Action"} />

            <div className="section-items">
                {
                    priorities.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={item.name}
                                formType={FormTypes.PRIORITY_FORM}
                                formCallback={() => getAllPriorities()}
                                detailType={DetailTypes.PRIORITY_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removePriority(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default PrioritiesScreen;