import axios from 'axios';
import { log } from 'console';
import jwt_decode from 'jwt-decode';
import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserFromJWT, postLogin, postRefreshToken } from '~/services/authentications';
import authReducer from '~/store/authReducer';
import axiosInstance from '~/utils/axios';

const initialState: any = {
    isLogin: false,
    user: null
}
const checkTimeAccess = (access_token: string) => {
    const jwt: any = jwt_decode(access_token);
    return jwt.exp > (new Date().getTime() + 1) / 1000;
}
const setSection = (access_token?: string | null) => {
    if (access_token) {
        localStorage.setItem('access_token', access_token);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
        localStorage.removeItem('access_token');
        axiosInstance.defaults.headers.common.Authorization = null;
    }
}
const setRefreshToken = (refresh_token?: string | null) => {
    if (refresh_token) {
        localStorage.setItem('refresh_token', refresh_token);
    } else {
        localStorage.removeItem('refresh_token');
    }
}
const setUser = (user: any) => {
    if (user) {
        localStorage.setItem('user-information', JSON.stringify(user));
    } else {
        localStorage.removeItem('user-informatio');
    }
}
const JWTContext = createContext<any>(null);
export const JWTProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        const init = async () => {
            try {
                const access_token = localStorage.getItem('access_token');
                if (access_token !== null && checkTimeAccess(access_token)) {
                    setSection(access_token);
                    const resq = await getUserFromJWT({ access_token });
                    const user = resq.data;
                    
                    dispatch({
                        type: 'Login',
                        payload: {
                            isLogin: true,
                            user,
                        }
                    })

                } else {
                    const refresh_token = localStorage.getItem('refresh_token');
                    if (refresh_token) {
                        const resp = await postRefreshToken(refresh_token);
                        const { access_token, newRefresh_token } = resp.data;
                        setSection(access_token);
                        setRefreshToken(newRefresh_token);
                        dispatch({
                            type: 'Login',
                            payload: { isLogin: true }
                        })
                    } else {
                        dispatch({
                            type: 'Logout'
                        })
                    }
                }
            } catch (error) {
                dispatch({
                    type: 'Logout'
                })
            }
        };
        init();
    }, [])
    const login = async (userName: String, password: String, remember_me: boolean) => {
        const resq = await postLogin({ userName, password });
        const { access_token, refresh_token, user } = resq.data;
        setSection(access_token);
        setRefreshToken(refresh_token);
        if (remember_me) {
            setUser(user);
        }
        dispatch({
            type: 'Login',
            payload: {
                isLogin: true,
                user
            }
        })
    }
    const logout = async () => {
        try {
            //call api logout
            setSection(null);
            setRefreshToken(null);
            setUser(null);
            dispatch({
                type: 'Logout'
            })
        } catch (e) {

        }
    }

    return (
        <JWTContext.Provider
            value={{
                ...state,
                login,
                logout,
            }}
        >
            {children}
        </JWTContext.Provider>
    )
}

export default JWTContext