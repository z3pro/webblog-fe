import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

const AuthGurad = ({children} : any) => {
  const { isLogin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true });
    }
  },[isLogin,navigate])
  return (
   children
  )
}

export default AuthGurad 