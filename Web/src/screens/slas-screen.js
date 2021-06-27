import React, { useEffect, Fragment, useState, useContext, useCallback } from 'react';
import Button from '../elements/button';
import SLAsService from '../services/slas-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const SLAsScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [departments, setSLAs] = useState([]);
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
            getAllSLAs();
        }
    }, [isMounted]);

    const getAllSLAs = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        SLAsService.getAll()
            .then(result => {
                setSLAs(result);

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

    const removeSLA = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        SLAsService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllSLAs();
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
                    SLAs
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
                            formType: FormTypes.SLA_FORM,
                            formPayload: null,
                            formCallback: () => getAllSLAs()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Description"} textRight={"Action"} />

            <div className="section-items">
                {
                    departments.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={item.description}
                                formType={FormTypes.SLA_FORM}
                                formCallback={() => getAllSLAs()}
                                detailType={DetailTypes.SLA_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removeSLA(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default SLAsScreen;