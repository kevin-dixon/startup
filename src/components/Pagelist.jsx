import React from 'react';
import '../../scss/custom.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login';
import { CreateAcct } from '../pages/createacct';
import { HostMain } from '../pages/hostmain';
import { HostVote } from '../pages/hostvote';
import { EditPlayers } from '../pages/editplayers';
import { Player } from '../pages/player';
import { Events } from '../pages/events';
import Footer from './Footer';
import Header from './Header';

function Pagelist() {
    return (
        <div>
            <Header />
            <nav>
                <h2>Page List</h2>
                <ul>
                    <li><NavLink to=''>Login</NavLink></li>
                    <li><NavLink to='createacct'>Create Account</NavLink></li>
                    <li><NavLink to='hostmain'>Host Main</NavLink></li>
                    <li><NavLink to='hostvote'>Host Vote</NavLink></li>
                    <li><NavLink to='editplayers'>Edit Players</NavLink></li>
                    <li><NavLink to='player'>Player Main</NavLink></li>
                    <li><NavLink to='events'>Events Viewer</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/createacct' element={<CreateAcct />} />
                <Route path='/hostmain' element={<HostMain />} />
                <Route path='/hostvote' element={<HostVote />} />
                <Route path='/editplayers' element={<EditPlayers />} />
                <Route path='/player' element={<Player />} />
                <Route path='/events' element={<Events />} />
                <Route path='*' element={<NotFound />} exact />
            </Routes>
            <Footer />
        </div>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}

export default Pagelist;