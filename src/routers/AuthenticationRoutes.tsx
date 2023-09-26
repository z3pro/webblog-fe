import React, { lazy } from 'react';
import AuthLayout from '~/layout/authLayout';
import Loadable from '~/ui-components/Loadable';
import GuestGuard from '~/utils/route-guard/GuestGuard';

const AuthLogin = Loadable(lazy(() => import('~/views/pages/authentication/authen-forms/login')));

const AuthenticationRoutes = {
  path: "/",
  element: (
    <GuestGuard>
      <AuthLayout />
    </GuestGuard>
  ),
  children: [
    {
      path: '/login',
      element: <AuthLogin/>
    }
  ]

}

export default AuthenticationRoutes