import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../../scss/custom.css';
import { Outlet, Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

export function EditPlayers() {
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
                <div key={i} class="list-group-item list-group-item-action">{player.displayName}<div
                    class="btn btn-success float-end text-white">add</div></div>
            );
        }
    } else {
        playerRows.push(
            <div key="0" class="list-group-item list-group-item-action">No players found.<div
                class="btn btn-success float-end text-white">add</div></div>
        );
    }

    return (
        <div>
            <UserHeader name={localStorage.getItem('email')} gameID={localStorage.getItem('gameID')} />

            <Button onClick={handleTest} className="m-2">Test: Add Example Player</Button>

            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Edit Players</h1>
                    <div class="card-text overflow-auto">
                        <ul id='players' class="list-group vh-75">
                            {playerRows}
                        </ul>
                        <ul id='players' class="list-group vh-75">
                            <div key="0" class="list-group-item list-group-item-action">{testState}</div>
                        </ul>
                    </div>
                </div>
            </div>

            <nav>
                <a class="btn btn-primary btn-lg btn-outline m-3 mt-1 text-white">
                    <Link class="text-white" to="/hostmain">Back</Link>
                </a>
            </nav>

            <Outlet />
        </div>
    );
}