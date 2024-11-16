import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import UserHeader from '../components/UserHeader';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from 'react-router-dom';

export function HostVote() {
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
                <p key={i} class="list-group-item list-group-item-action">{player.displayName}</p>
            );
        }
    } else {
        playerRows.push(
            <p key="0" class="list-group-item list-group-item-action">No players found.</p>
        );
    }

    return (
        <div>
            <UserHeader name={localStorage.getItem('email')} gameID={localStorage.getItem('gameID')} />
            
            <Button onClick={handleTest} className="m-2">Test: Add Example Player</Button>

            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Ongoing Vote</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group">
                            <p class="list-group-item list-group-item-action">[player]</p>
                            <p class="list-group-item list-group-item-action">{testState}</p>
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
            <Outlet />
        </div>
    );
}