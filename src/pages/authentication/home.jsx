// displays login if unauthenticated, then home or player based on authentication

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import '../../../scss/custom.css';
import { AuthState } from './authState';
import { HostMain } from '../hostmain';
import { Player } from '../player';
import { Login } from '../login';

export function Home({ email, password, authState, onAuthChange }) {

    console.log("Current AuthState:", authState);

    return (
        <div>
            {authState.equals(AuthState.Unknown) && <h2>unknown auth state</h2>}
            {authState.equals(AuthState.Player) && (
                <Player 
                    name={displayName}
                    gameID={gameID}
                    onLogout={() => onAuthChange('', '', AuthState.Login)} />
            )}
            {authState.equals(AuthState.Host) && (
                <HostMain 
                    name={email}
                    gameID={gameID}
                    onLogout={() => onAuthChange('', '', AuthState.Login)} />
            )}
            {authState.equals(AuthState.Login) && (
                <Login
                    email={email}
                    password={password}
                    onLogin={(newEmail, newPassword) => {
                        onAuthChange(newEmail, newPassword, AuthState.Host)
                    }}
                    onPlayerLogin={(newDisplayName, newGameID) => {
                        onAuthChange(newDisplayName, newGameID, AuthState.Player)
                    }}
                />
            )}
            <Outlet />
        </div>
    );
}