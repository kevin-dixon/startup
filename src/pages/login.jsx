import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import Header from "../components/Header";

export function Login() {
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center text-center">
                <form className="form-signin">
                    <h1 className="display-6 m-3">Join</h1>
                    <div className="form-group">
                        <label className="visually-hidden" for="inputGameID">Game ID</label>
                        <input type="text" className="form-control m-2" id="inputGameID" placeholder="Enter Game ID" required
                            autofocus></input>
                    </div>
                    <div className="form-group">
                        <label className="visually-hidden" for="inputDisplayName">Display Name</label>
                        <input type="text" className="form-control m-2" id="inputDisplayName" placeholder="Enter Display Name"
                            required></input>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 m-2 text-white" href="player.html">Submit</button>
                </form>
            </div>
            <div className="container d-flex justify-content-center text-center">
                <form className="form-signin">
                    <h1 className="display-6 m-3">Host</h1>
                    <div className="form-group">
                        <label className="visually-hidden" for="inputEmail">Email</label>
                        <input type="email" className="form-control m-2" id="inputEmail" placeholder="Enter Email" required></input>
                    </div>
                    <div className="form-group">
                        <label className="visually-hidden" for="inputPassword">Password</label>
                        <input type="password" className="form-control m-2" id="inputPassword" placeholder="Enter Password"
                            required></input>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 m-2 text-white" href="host.html">Login</button>
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