import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import UserHeader from '../components/UserHeader';

export function HostVote() {
    return (
        <div>
            <UserHeader />
            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Ongoing Vote</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group">
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">[player]</p>
                        </ul>
                    </div>
                    <div class="navbar pt-3">
                        <div class="nav-item">
                            <label>Timer</label>
                            <div class="d-inline p-2 bg-primary text-white rounded">[time remaining]</div>
                        </div>
                        <a class="d-inline nav-item btn btn-danger text-white">End Vote</a>
                    </div>
                </div>
            </div>
        </div>
    );
}