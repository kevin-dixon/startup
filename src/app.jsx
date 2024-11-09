import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';
import './app.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import { Login } from './pages/login';
// import { CreateAcct } from './pages/createacct';
import { HostMain } from './pages/hostmain';
// import { HostVote } from './pages/hostvote';
// import { EditPlayers } from './pages/editplayers';
import { Player } from './pages/player';
// import { Events } from './pages/events';
import Footer from './components/Footer';

function Layout() {
    return (
        <React.Fragment>
            <h2>Layout Page</h2>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/hostmain">Host</Link></li>
                    <li><Link to="/player">Player</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    );
}

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/hostmain" element={<HostMain />} />
                    <Route path="/player" element={<Player />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}