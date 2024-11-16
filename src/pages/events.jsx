import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../../scss/custom.css';
import { Link, Outlet } from "react-router-dom";
import UserHeader from '../components/UserHeader';

export function Events() {
    const [events, setEvents] = React.useState([]);
    const [testState, setTestState] = React.useState();

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((events) => {
                setEvents(events);
            });
    }, []);

    function handleTest() {
        console.log("adding test data");
        fetch('/api/testevents')
            .then((response) => response.json())
            .then((testing) => {
                console.log(testing);
                setTestState(testing.title);
            });
    }

    // Demonstrates rendering an array with React
    const eventRows = [];
    if (events.length) {
        for (const [i, event] of events.entries()) {
            eventRows.push(
                <div key={i}>{event.title}: {event.message}</div>
            );
        }
    } else {
        eventRows.push(
            <div key="0">No events found.</div>
        );
    }

    return (
        <div>
            <UserHeader name={localStorage.getItem('displayName')} gameID={localStorage.getItem('gameID')} />

            <Button onClick={handleTest} className="m-2">Test: Add Example Event</Button>

            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Game Event Log</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group" id='events'>
                            {eventRows}
                            <div key="0">{testState}</div>
                        </ul>
                    </div>
                </div>
            </div>

            <nav>
                <a class="btn btn-primary btn-lg btn-outline m-3 mt-1 text-white">
                    <Link class="text-white" to="/player">Back</Link>
                </a>
            </nav>

            <Outlet />
        </div>
    );
}