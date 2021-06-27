import React, { useEffect, useState, useContext, useCallback, Fragment } from 'react';
import Button from '../elements/button';
import PositionsService from '../services/positions-service';
import Item from '../elements/item';
import AppContext from '../context/app-context';
import AlertTypes from '../constants/alert-types';
import ItemsHeader from '../elements/items-header';
import FormTypes from '../constants/form-types';
import DetailTypes from '../constants/detail-types';

const PositionsScreen = props => {
    const [state, setState] = useContext(AppContext);
    const [positions, setPositions] = useState([]);
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
            getAllPositions();
        }
    }, [isMounted]);

    const getAllPositions = useCallback(() => {
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
    });

    const removePosition = useCallback(id => {
        setState(state => ({
            ...state,
            isLoadingVisible: true,
            isAlertVisible: false
        }));

        PositionsService.remove(id)
            .then(() => {
                setState(state => ({
                    ...state,
                    isLoadingVisible: false,
                    isAlertVisible: true,
                    alertType: AlertTypes.SUCCESS,
                    alertText: 'Item deleted successfully!',
                }));

                getAllPositions();
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
                    Positions
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
                            formType: FormTypes.POSITION_FORM,
                            formPayload: null,
                            formCallback: () => getAllPositions()
                        }))}
                    />
                </div>
            </div>

            <ItemsHeader textLeft={"Name"} textRight={"Action"} />

            <div className="section-items">
                {
                    positions.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                formPayload={item}
                                title={item.name}
                                formType={FormTypes.POSITION_FORM}
                                formCallback={() => getAllPositions()}
                                detailType={DetailTypes.POSITION_DETAIL}
                                detailPayload={item}
                                deleteCallback={id => removePosition(id)}
                            />
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default PositionsScreen;