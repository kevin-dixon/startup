import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import { Outlet } from "react-router-dom";
import UserHeader from '../components/UserHeader';

export function HostMain() {
    return (
        <div>
            <UserHeader />
            <div class="card-group row">
                <div class="col-10 col-sm-7 m-2">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title display-6 text-center text-md-start">Vote Settings</h1>

                            <form class="card-text">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckChecked" checked></input>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Anonymous</label>
                                </div>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckChecked" checked></input>
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Timer</label>
                                </div>

                                <label>Time (seconds)</label>
                                <div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio1" value="15-seconds"></input>
                                        <label class="form-check-label" for="inlineRadio1">15</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="30-seconds"></input>
                                        <label class="form-check-label" for="inlineRadio2">30</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio3" value="45-seconds"></input>
                                        <label class="form-check-label" for="inlineRadio3">45</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio4" value="60-seconds" checked></input>
                                        <label class="form-check-label" for="inlineRadio4">60</label>
                                    </div>
                                </div>
                            </form>
                            <a href="hostvote.html" class="btn btn-primary m-3 active text-white" role="button"
                                aria-pressed="true">Start New Vote</a>
                        </div>
                    </div>
                </div>

                <div class="col-10 col-sm-4 m-2">
                    <div class="card">
                        <div class="card-body text-center">
                            <h1 class="card-title display-6 text-center text-md-start">Players and Log</h1>
                            <nav>
                                <a href="editplayers.html" class="btn btn-primary active text-white m-2" role="button"
                                    aria-pressed="true">Player List</a>
                                <a href="event.html" class="btn btn-primary active text-white m-2" role="button"
                                    aria-pressed="true">Event Log</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <Outlet />
        </div>
    );
}