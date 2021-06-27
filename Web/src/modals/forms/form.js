import React, { useContext } from 'react';
import '../../styles/forms-styles/form-styles.css';
import AppContext from '../../context/app-context';
import FormTypes from '../../constants/form-types';
import DepartmentForm from './department-form';
import PositionForm from './position-form';
import UserForm from './user-form';
import SlaForm from './sla-form';
import PriorityForm from './priority-form';
import IncidentForm from './incident-form';
import IncidentHistoryForm from './incident-history-form';

const Form = () => {
    const [state, setState] = useContext(AppContext);

    return (
        <div id="forms-container">
            {
                (() => {
                    switch (state.formType) {
                        case FormTypes.DEPARTMENT_FORM:
                            return <DepartmentForm />
                        case FormTypes.POSITION_FORM:
                            return <PositionForm />
                        case FormTypes.USER_FORM:
                            return <UserForm />
                        case FormTypes.SLA_FORM:
                            return <SlaForm />
                        case FormTypes.PRIORITY_FORM:
                            return <PriorityForm />
                        case FormTypes.INCIDENT_FORM:
                            return <IncidentForm />
                        case FormTypes.INCIDENT_HISTORY_FORM:
                            return <IncidentHistoryForm />
                    }
                })()
            }
        </div>
    );
}

export default Form;