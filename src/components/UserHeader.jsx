import React from 'react';

const UserHeader = (props) => {
    const name = props.name;
    const gameID = props.gameID;

    return (
        <header class="navbar navbar-expand-lg basic-background">
            <a class="navbar-brand p-2 ms-3" href="#">
                <img class="d-inline-block align-top" width="80" height="80" src="/images/profile_logo.png"></img>
            </a>
            <div class="d-flex flex-column align-self-center m-3">
                <div class="p-2">
                    <label>Host</label>
                    <div class="d-inline p-2 bg-primary text-white rounded">{name}</div>
                </div>
                <div class="p-2">
                    <label>Game ID</label>
                    <div class="d-inline p-2 bg-primary text-white rounded">{gameID}</div>
                </div>
            </div>
        </header>
    );
}

export default UserHeader;