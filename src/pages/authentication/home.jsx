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
    const authState = location.state?.authState;

    console.log("Current AuthState:")
    console.log(authState)

    return (
        <div>
            {authState.name === AuthState.Unknown.name && <h2>unknown auth state</h2>}
            {authState.name === AuthState.Host.name && (
                <HostMain email={email} onLogout={() => onAuthChange(email, AuthState.Login)} />
            )}
            {authState.name === AuthState.Login.name && (
                <Login
                    userName={userName}
                    onLogin={(email) => {
                        onAuthChange(email, AuthState.Host)
                    }}
                />
            )}
            <Outlet />
        </div>
    );
}