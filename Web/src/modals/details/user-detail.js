import React, { useContext, useState, useEffect, useCallback } from 'react';
import Button from '../../elements/button';
import AppContext from '../../context/app-context';
import '../../styles/details-styles/detail-styles.css';
import Detail from '../../elements/detail';
import PositionsService from '../../services/positions-service';
import AlertTypes from '../../constants/alert-types';
import moment from 'moment';

const UserDetail = () => {
    const [state, setState] = useContext(AppContext);
    const [position, setPosition] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(state.detailPayload);
    }, []);

    useEffect(() => {
        if (user.positionId !== undefined) {
            getPosition();
        }
    }, [user]);

    const getPosition = useCallback(() => {
        setState(state => ({
            ...state,
            isLoadingVisible: true
        }));

        PositionsService.getById(user.positionId)
            .then(result => {
                setPosition(result);

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
                            title={'Name'}
                            value={user.name}
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
                            title={'Lastname'}
                            value={user.lastname}
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
                            title={'Identification card'}
                            value={user.identificationCard}
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
                            title={'Mail'}
                            value={user.mail}
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
                            title={'Phone'}
                            value={user.phone}
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
                            title={'Birthdate'}
                            value={moment(user.birthdate).format('YYYY-MM-DD')}
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
                            title={'Username'}
                            value={user.username}
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
                            title={'Position'}
                            value={position.name}
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

export default UserDetail;