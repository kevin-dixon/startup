import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/custom.css';

export function Events() {
    return (
        <main>
            <div class="card m-2">
                <div class="card-body">
                    <h1 class="card-title display-6 text-center text-md-start">Game Event Log</h1>
                    <div class="card-text overflow-auto">
                        <ul class="list-group vh-75">
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">[player] was
                                removed</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                            <p class="list-group-item list-group-item-action">vote [#]
                                ended</p>
                        </ul>
                    </div>
                </div>
            </div>

            <nav>
                [back button]
            </nav>

        </main>
    );
}