import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import DepartmentsScreen from '../screens/departments-screen';
import PositionsScreen from '../screens/positions-screen';
import SLAsScreen from '../screens/slas-screen';
import PrioritiesScreen from '../screens/priorities-screen';
import UsersScreen from '../screens/users-screen';
import IncidentsScreen from '../screens/incidents-screen';
import IncidentsHistoriessScreen from '../screens/incidents-histories-screen';
import MainTemplate from '../templates/main-template';
import HomeScreen from '../screens/home-screen';

const Routes = [
    {
        path: '/',
        component: () => <Redirect to={{ pathname: "/home" }} />
    },
    {
        path: '/home',
        component: HomeScreen
    },
    {
        path: '/departments',
        component: DepartmentsScreen
    },
    {
        path: '/positions',
        component: PositionsScreen
    },
    {
        path: '/slas',
        component: SLAsScreen
    },
    {
        path: '/priorities',
        component: PrioritiesScreen
    },
    {
        path: '/users',
        component: UsersScreen
    },
    {
        path: '/incidents',
        component: IncidentsScreen
    },
    {
        path: '/incidents-histories',
        component: IncidentsHistoriessScreen
    }
];

export default Routes
