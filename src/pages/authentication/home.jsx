// displays login if unauthenticated, then home or player based on authentication

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import '../../../scss/custom.css';
import { AuthState } from './authState';
import { HostMain } from '../hostmain';
import { Login } from '../login';

export function Home({ email, authState, onAuthChange }) {

    console.log("Current AuthState:", authState)

    return (
        <div>
            {authState.equals(AuthState.Unknown) && <h2>unknown auth state</h2>}
            {authState.equals(AuthState.Host) && (
                <HostMain email={email} onLogout={() => onAuthChange(email, AuthState.Login)} />
            )}
            {authState.equals(AuthState.Login) && (
                <Login
                    email={email}
                    onLogin={(email) => {
                        onAuthChange(email, AuthState.Host)
                    }}
                />
            )}
            <Outlet />
        </div>
    );
}