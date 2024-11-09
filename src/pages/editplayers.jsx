import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

export function EditPlayers() {
    return (
        <div>
            <UserHeader />
            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Edit Players</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group vh-75">
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-success float-end text-white">add</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-secondary float-end text-white">remove</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-success float-end text-white">add</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-secondary float-end text-white">remove</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-secondary float-end text-white">remove</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-secondary float-end text-white">remove</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-success float-end text-white">add</div></a>
                            <a class="list-group-item list-group-item-action">[player]<div
                                class="btn btn-success float-end text-white">add</div></a>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <p>[Back Button]</p>
            </div>
            <Outlet />
        </div>
    );
}