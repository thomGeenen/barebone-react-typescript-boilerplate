import React, { FunctionComponent, useState, createContext } from 'react';
import cookie from 'js-cookie';
import Session from '@/models/Session';

export const getSession = (): Session => {
    const sessionCookie = cookie.get('session');
    if(!sessionCookie) {
        return { logged: false };
    }

    return JSON.parse(sessionCookie);
};

export const setSession = (session): void => {
    cookie.remove('session');
    cookie.set('session', session, { expires: 14});
};

export const removeSession = (session): void => {
    cookie.remove('session');
};

export const SessionContext = createContext(getSession());

export const SessionProvider: FunctionComponent = ({ children }) => {
    const [session, setSession] = useState<Session>(getSession());
    const [error, setError] = useState(null);

    if(session == undefined) {
        return <p>loading...</p>
    }

    if(error !== null) {
        return <p>Session error...</p>
    }

    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    )
}

export const useSession = () => {
    return {
        session: getSession(),
        setSession: setSession
    }
}