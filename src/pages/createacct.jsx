import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

export function CreateAcct() {
    return (
        <div>
            <Header />
            <div class="container d-flex justify-content-center text-center">
                <form class="form-signin">
                    <h1 class="display-6 m-3">New Account</h1>
                    <div class="form-group">
                        <label class="visually-hidden" for="inputEmail">Email</label>
                        <input type="email" class="form-control m-2" id="inputEmail" placeholder="Enter Email" required
                            autofocus></input>
                    </div>
                    <div class="form-group">
                        <label class="visually-hidden" for="inputPassword">Password</label>
                        <input type="password" class="form-control m-2" id="inputPassword" placeholder="Enter Password"
                            required></input>
                    </div>
                    <div class="form-group">
                        <label class="visually-hidden" for="inputConfirmPassword">Confirm Password</label>
                        <input type="password" class="form-control m-2" id="inputConfirmPassword"
                            placeholder="Re-enter Password" required></input>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 m-2 text-white" href="host.html">Create
                        Account</button>
                </form>
            </div>
            <Outlet />
        </div>
    );
}