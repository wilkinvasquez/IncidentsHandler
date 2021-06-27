import React, { useContext, useState, useEffect } from 'react';
import Button from '../../elements/button';
import AppContext from '../../context/app-context';
import '../../styles/details-styles/detail-styles.css';
import Detail from '../../elements/detail';

const SlaDetail = () => {
    const [state, setState] = useContext(AppContext);
    const [sla, setSla] = useState({});

    useEffect(() => {
        setSla(state.detailPayload);
    }, []);

    return (
        <div className="detail-container col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
            <div className="detail-sub-container">
                <div className="detail-title">
                    SLA details
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
                            title={'Description'}
                            value={sla.description}
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
                            title={'Hours quantity'}
                            value={sla.hoursQuantity}
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

export default SlaDetail;