import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import Error from '~/views/pages/maintance/Error'
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoutes';

export default function ThemeRoutes() {
    return useRoutes([{ path: '*', element: <Error /> }, MainRoutes,AuthenticationRoutes,AdminRoutes]);
}