import React, { useContext } from 'react';
import '../../styles/details-styles/detail-styles.css';
import AppContext from '../../context/app-context';
import DetailTypes from '../../constants/detail-types';
import DepartmentDetail from './department-detail';
import PositionDetail from './position-detail';
import UserDetail from './user-detail';
import SlaDetail from './sla-detail';
import PriorityDetail from './priority-detail';
import IncidentHistoryDetail from './incident-history-detail';
import IncidentDetail from './incident-detail';

const Detail = () => {
    const [state, setState] = useContext(AppContext);

    return (
        <div id="details-container">
            {
                (() => {
                    switch (state.detailType) {
                        case DetailTypes.DEPARTMENT_DETAIL:
                            return <DepartmentDetail />
                        case DetailTypes.POSITION_DETAIL:
                            return <PositionDetail />
                        case DetailTypes.USER_DETAIL:
                            return <UserDetail />
                        case DetailTypes.SLA_DETAIL:
                            return <SlaDetail />
                        case DetailTypes.PRIORITY_DETAIL:
                            return <PriorityDetail />
                        case DetailTypes.INCIDENT_DETAIL:
                            return <IncidentDetail />
                        case DetailTypes.INCIDENT_HISTORY_DETAIL:
                            return <IncidentHistoryDetail />
                    }
                })()
            }
        </div>
    );
}

export default Detail;