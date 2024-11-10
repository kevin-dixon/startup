//displayed if unauthenticated

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../../scss/custom.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export function Login(props) {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState(props.email);
    const [gameID, setGameID] = React.useState(props.gameID);
    const [password, setPassword] = React.useState(props.password);


    function generateGameID() {
        /*TODO: implement random gameID generator */
        return 123456;
    }

    async function loginHost(e) {
        e.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('gameID', generateGameID());
        props.onLogin(email);
        console.log("login action email: ", email);
        navigate('/hostmain');
    }

    async function loginPlayer(e) {
        e.preventDefault();
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('gameID', gameID);
        props.onPlayerLogin(displayName);
        navigate('/player')
    }

    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center text-center">
                <form className="form-signin">
                    <h1 className="display-6 m-3">Join</h1>
                    <div className="form-group">
                        <input type="text" className="form-control m-2" id="inputGameID" placeholder="Enter Game ID" required
                            autofocus></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control m-2" id="inputDisplayName" placeholder="Enter Display Name"
                            required></input>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 m-2 text-white">Submit</button>
                </form>
            </div>
            <div className="container d-flex justify-content-center text-center">
                <form className="form-signin">
                    <h1 className="display-6 m-3">Host</h1>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control m-2" id="inputEmail" placeholder="Enter Email" required></input>
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control m-2" id="inputPassword" placeholder="Enter Password"
                            required></input>
                    </div>
                    <Button type="button" className="btn btn-primary w-100 m-2 text-white" onClick={loginHost}>
                        Login
                    </Button>
                </form>
            </div>
            <div className="form-group d-flex justify-content-center">
                <small id="createAccountPrompt" className="form-text text-muted m-2">Hosting your first game? Make a new
                    account!</small>
            </div>

            <nav class="d-flex justify-content-center">
                <a type="submit" class="btn btn-sm btn-secondary m-2 text-white">
                    <Link class="text-white" to="/createacct">Create Account</Link>
                </a>
            </nav>

            <Outlet />
        </div>
    );
}