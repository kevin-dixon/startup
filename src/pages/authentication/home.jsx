// displays login if unauthenticated, then home or player based on authentication

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import '../../../scss/custom.css';
import { AuthState } from './authState';
import { HostMain } from '../hostmain';
import { Login } from '../login';
import { useLocation } from "react-router-dom";

export function Home({ userName, onAuthChange }) {
    const location = useLocation();
    const authState = location.state?.authState || AuthState.Login;

    console.log("Current AuthState:")
    console.log(authState)

    return (
        <div>
            <h2>Home page</h2>

            {authState === AuthState.Unknown && <h2>unknown auth state</h2>}
            {authState === AuthState.Host && (
                <HostMain username={userName} onLogout={() => onAuthChange(userName, AuthState.Login)} />
            )}
            {authState === AuthState.Login && (
                <Login
                    userName={userName}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Host)
                    }}
                />
            )}

            <Outlet />
        </div>
    );
}