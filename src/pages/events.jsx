import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import {
    BrowserRouter as Link
} from "react-router-dom";
import UserHeader from '../components/UserHeader';

export function Events() {
    const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((events) => {
                setEvents(events);
            });
    }, []);

    // Demonstrates rendering an array with React
    const eventRows = [];
    if (events.length) {
        for (const [i, event] of events.entries()) {
            eventRows.push(
                <p key={i}className="list-group-item list-group-item-action">
                    {event.name}
                    {event.action}
                </p>
            );
        }
    } else {
        eventRows.push(
            <p key="0" className="list-group-item list-group-item-action">
                No events recorded.
            </p>
        );
    }

    return (
        <div>
            <UserHeader name={localStorage.getItem('displayName')} gameID={localStorage.getItem('gameID')} />

            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Game Event Log</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group" id='events'>
                            {eventRows}
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