import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/custom.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
//import { Login } from './pages/login';
import Pagelist from './components/Pagelist';

function App() {
    return (
        <BrowserRouter>
            <Pagelist />
        </BrowserRouter>
    );
}

export default App;