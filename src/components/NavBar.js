import React from 'react';

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="">WorldFootballShirts</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Jersey Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Clubs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">National Teams</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Players</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
