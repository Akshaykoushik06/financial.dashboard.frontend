import React from 'react';

import SettingsIcon from '../icons/Settings';
import ProfileIcon from '../icons/Profile';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Stocks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mutual Funds</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gold</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Food Card</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Provident Fund</a>
                    </li>
                </ul>
            </div>
            <div class="mx-auto order-0">
                <a class="navbar-brand mx-auto" href="#">Financial Dashboard</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><ProfileIcon /></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><SettingsIcon /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;