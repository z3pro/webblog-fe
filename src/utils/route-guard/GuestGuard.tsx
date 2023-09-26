import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';


const GuestGuard = ({ children }: any) => {
    const { isLogin } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLogin) {
            navigate('/home', { replace: true });
        }
    })
    return (
        children
    )
}

export default GuestGuard