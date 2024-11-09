import React from 'react';

const Header = () => {
  return (
    <header class="row">
        <nav class="d-flex align-items-start basic-background p-2">
            <a href="index.html">
                <img class="d-inline-block align-top p-3" width="100" height="100" src="/images/strapped_logo.png"></img>
            </a>
            <div class="d-flex flex-column align-self-center">
                <h1 class="primary-text fw-bold">Mafia Mystery</h1>
                <h6 class="text-muted m-1">Voting Utility</h6>
            </div>
        </nav>
    </header>
  );
};

export default Header;