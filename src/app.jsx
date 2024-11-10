import * as React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import { Login } from './pages/login';
import { CreateAcct } from './pages/createacct';
import { HostMain } from './pages/hostmain';
import { HostVote } from './pages/hostvote';
import { EditPlayers } from './pages/editplayers';
import { Player } from './pages/player';
import { Events } from './pages/events';
import { Home } from './pages/authentication/home';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthState } from "./pages/authentication/authState";

function Layout() {
    return (
        <React.Fragment>
            <Header />
            <div className="m-3">
                <h2>Main Pages</h2>
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        {/* <li><Link to="/hostmain">Host</Link></li>
                        <li><Link to="/player">Player</Link></li> */}
                        <li><Link to="/home" state={{ authState: AuthState.Login }}>Home</Link></li>
                    </ul>
                </nav>
                <h2>Sub Pages</h2>
                <nav>
                    <ul>
                        <li><Link to="/createacct">Create Account</Link></li>
                        <li><Link to="/editplayers">Edit Players</Link></li>
                        <li><Link to="/hostvote">Host Vote</Link></li>
                        <li><Link to="/events">Event Viewer</Link></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default function App() {
    const [authState, setAuthState] = useState(AuthState.Unknown);
    const [userName, setUserName] = useState('');

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createacct" element={<CreateAcct />} />
                    <Route path="/hostmain" element={<HostMain />} />
                    <Route path="/hostvote" element={<HostVote />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/editplayers" element={<EditPlayers />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/home" element={<Home 
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, newAuthState) => {
                            setAuthState(newAuthState);
                            setUserName(userName);
                        }}
                    />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}