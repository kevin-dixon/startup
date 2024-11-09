import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import { Outlet } from "react-router-dom";
import UserHeader from '../components/UserHeader';


export function Player() {
    return (
        <div>
            <UserHeader />
            <div class="card-group row m-2">
                <div class="col-12 col-md-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="row pb-2">
                                <h1 class="card-title display-6 align-self-center col-4 p-0 ps-2">Players</h1>
                                <div class="text-end col-8 text-center align-middle p-2">
                                    <label>Vote Time: </label>
                                    <div class="d-inline p-2 bg-secondary text-white rounded">00:00</div>
                                </div>
                            </div>
                            <div class="card-text overflow-auto">
                                <ul class="list-group vh-75">
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                    <a class="list-group-item list-group-item-action">[player]<div
                                        class="btn btn-success float-end text-white">select</div></a>
                                </ul>
                            </div>

                            <div class="navbar p-2 mt-2">
                                <div class="nav-item">
                                    <label>Selected: </label>
                                    <div class="d-inline p-2 bg-primary text-white rounded">[player]</div>
                                </div>
                                <a class="d-inline nav-item btn btn-danger text-white">Vote</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="card mt-2 p-2">
                        <div class="card-body text-center">
                            <div class="row">
                                <h1 class="card-title display-6 text-center">View Game Events</h1>
                                <nav>
                                    [event log button]
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}