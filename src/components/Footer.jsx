import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Outlet
} from "react-router-dom";

const Footer = () => {
  return (
    <footer class="background-tertiary text-center fixed-bottom opacity-75 text-white">
        <nav class="row p-2 pb-0">
            <Link class="col-5 light-link"to="/">Page List</Link>
            <div class="col-2">
                <img class="d-inline-block align-top" width="50" height="50" src="../images/hat_logo.png"></img>
            </div>
            <div class="col-5">
                <label>Kevin Dixon: </label>
                <a class="light-link" href="https://github.com/kevin-dixon/startup">GitHub Repo</a>
            </div>
        </nav>
        <div class="text-center p-2 pt-0">
            <label>&trade; 2024 Trademark:</label>
            <a class="light-link" href="https://mafiamystery.click/">MafiaMystery.click</a>
        </div>
    </footer>
  );
};

export default Footer;