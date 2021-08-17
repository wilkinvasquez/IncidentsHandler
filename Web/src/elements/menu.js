import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/elements-styles/menu-styles.css';
import AppContext from '../context/app-context';

const Menu = () => {
    const [state, setState] = useContext(AppContext);

    const markActive = useCallback(location => {
        setState(state => ({
            ...state,
            location: location
        }));
    });

    return (
        <div id="menu-container">
            <div id="menu-imagotype-container">
                <img id="menu-imagotype" src={require('../assets/images/incidents-handler-imagotype-horizontal.png')} alt="" />
            </div>

            <ul id="menu-options">
                <li><Link to='/home' onClick={() => markActive('/home')}><div className={state.location === '/home' ? 'menu-text-option-active' : 'menu-text-option'}>Home</div></Link></li>
                <li><Link to='/departments' onClick={() => markActive('/departments')}><div className={state.location === '/departments' ? 'menu-text-option-active' : 'menu-text-option'}>Departments</div></Link></li>
                <li><Link to='/positions' onClick={() => markActive('/positions')}><div className={state.location === '/positions' ? 'menu-text-option-active' : 'menu-text-option'}>Positions</div></Link></li>
                <li><Link to='/slas' onClick={() => markActive('/slas')}><div className={state.location === '/slas' ? 'menu-text-option-active' : 'menu-text-option'}>SLAs</div></Link></li>
                <li><Link to='/priorities' onClick={() => markActive('/priorities')}><div className={state.location === '/priorities' ? 'menu-text-option-active' : 'menu-text-option'}>Priorities</div></Link></li>
                <li><Link to='/users' onClick={() => markActive('/users')}><div className={state.location === '/users' ? 'menu-text-option-active' : 'menu-text-option'}>Users</div></Link></li>
                <li><Link to='/incidents' onClick={() => markActive('/incidents')}><div className={state.location === '/incidents' ? 'menu-text-option-active' : 'menu-text-option'}>Incidents</div></Link></li>
                <li><Link to='/incidents-histories' onClick={() => markActive('/incidents-histories')}><div className={state.location === '/incidents-histories' ? 'menu-text-option-active' : 'menu-text-option'}>Incidents histories</div></Link></li>
            </ul>
        </div>
    );
}

export default Menu;