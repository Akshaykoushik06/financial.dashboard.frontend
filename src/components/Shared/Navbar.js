import React from 'react';
import { Link } from 'react-router-dom';

import SettingsIcon from '../../icons/Settings';
import ProfileIcon from '../../icons/Profile';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul class="navbar-nav mr-auto">
                    <Link to='/stocks'>
                        <li class="nav-item active">
                            <a class="nav-link">Stocks</a>
                        </li>
                    </Link>
                    <Link to='/mutualfunds'>
                        <li class="nav-item">
                            <a class="nav-link">Mutual Funds</a>
                        </li>
                    </Link>
                    <Link to='/gold'>
                        <li class="nav-item">
                            <a class="nav-link">Gold</a>
                        </li>
                    </Link>
                    <Link to='/foodcard'>
                        <li class="nav-item">
                            <a class="nav-link">Food Card</a>
                        </li>
                    </Link>
                    <Link to='/pf'>
                        <li class="nav-item">
                            <a class="nav-link">Provident Fund</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <div class="mx-auto order-0">
                <Link to='/'>
                    <a class="navbar-brand mx-auto" href="#">Financial Dashboard</a>
                </Link>
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