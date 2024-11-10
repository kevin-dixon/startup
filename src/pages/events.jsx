import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import UserHeader from '../components/UserHeader';

export function Events() {
    return (
        <div>
            <UserHeader name={localStorage.getItem('displayName')} gameID={localStorage.getItem('gameID')}/>
            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Game Event Log</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group vh-75">
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                        </ul>
                    </div>
                </div>
            </div>

            <nav>
                <a class="btn btn-primary btn-lg btn-outline m-3 mt-1 text-white">
                    <Link class="text-white" to="/player">Back</Link>
                </a>
            </nav>

        </div>
    );
}