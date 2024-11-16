//displayed if authenticated as player

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import { Outlet, Link } from "react-router-dom";
import UserHeader from '../components/UserHeader';
import Button from 'react-bootstrap/Button';

export function Player(props) {
    const [players, setPlayers] = React.useState([]);
    const [testState, setTestState] = React.useState();

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        fetch('/api/players')
            .then((response) => response.json())
            .then((players) => {
                setPlayers(players);
            });
    }, []);

    function handleTest() {
        console.log("adding test data");
        fetch('/api/testplayers')
            .then((response) => response.json())
            .then((testing) => {
                console.log(testing);
                setTestState(testing.displayName);
            });
    }

    // Demonstrates rendering an array with React
    const playerRows = [];
    if (players.length) {
        for (const [i, player] of players.entries()) {
            playerRows.push(
                <a key={i} class="list-group-item list-group-item-action">{player.displayName}<div
                class="btn btn-success float-end text-white">select</div></a>
            );
        }
    } else {
        playerRows.push(
            <a key="0" class="list-group-item list-group-item-action">No players found<div
                class="btn btn-success float-end text-white">select</div></a>
        );
    }

    return (
        <div>
            <UserHeader name={localStorage.getItem('displayName')} gameID={localStorage.getItem('gameID')} />

            <Button onClick={handleTest} className="m-2">Test: Add Example Player</Button>

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
                                        <a class="list-group-item list-group-item-action">{testState}</a>
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
                                    <a class="btn btn-primary active text-white m-2" role="button"
                                        aria-pressed="true"><Link class="text-white" to="/events">Event Log</Link></a>
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