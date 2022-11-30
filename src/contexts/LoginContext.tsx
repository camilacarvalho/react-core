import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LoginService } from '../api/login/AuthService';
import { Environment } from '../environment';
import { LoginRequest } from '../models/login';

interface ILoginContextData {
    isAuthenticated: boolean;
    logout:() => void;
    login: (auth: LoginRequest) => Promise<string | void>
}


const  LoginContext = createContext({} as ILoginContextData);


export const LoginProvider = ({children}:{children: React.ReactNode}) => {

    const [accessToken, setAccessToken]= useState<string>();
    /** Funções que são passadas em providers tem que usar useCallback, para memorizar o resultado da função sem necessitar executá-la com frequencia. */
    const handleLogin = useCallback( async (auth: LoginRequest) => {
        const result = await LoginService.login(auth);
        /** É importante salvar no LocalStorage porque ao apertar f5 não perderá o token */
        localStorage.setItem(Environment.LOCAL_STORAGE_KEY_ACCESS_TOKEN, JSON.stringify(result.accessToken));
        setAccessToken(result.accessToken);

    },[]);

    useEffect(()=> {
        const accessToken = localStorage.getItem(Environment.LOCAL_STORAGE_KEY_ACCESS_TOKEN);
        if(accessToken) {
            setAccessToken(JSON.parse(accessToken));
        } else {
            setAccessToken(undefined);
        }
    },[]);

    const handleLogout = useCallback (()=> {
        localStorage.removeItem(Environment.LOCAL_STORAGE_KEY_ACCESS_TOKEN);
        setAccessToken(undefined);
    }, []);

    const isAuthenticated = useMemo(()=>!!accessToken, [accessToken]);
    return(
        <LoginContext.Provider value={{isAuthenticated, login:handleLogin, logout: handleLogout}}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);