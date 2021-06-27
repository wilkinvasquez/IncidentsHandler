import React, { useState } from 'react';
import AppContext from './app-context';
import AppState from './app-state';

const AppProvider = props => {
    const [state, setState] = useState(AppState);

    return (
        <AppContext.Provider value={[state, setState]}>
            { props.children }
        </AppContext.Provider>
    );
}

export default AppProvider;