import React from 'react';
import { Link } from 'react-router-dom';

import SettingsIcon from '../../icons/Settings';
import ProfileIcon from '../../icons/Profile';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <Link to='/stocks'>
                        <li className="nav-item active">
                            <a className="nav-link">Stocks</a>
                        </li>
                    </Link>
                    <Link to='/mutualfunds'>
                        <li className="nav-item">
                            <a className="nav-link">Mutual Funds</a>
                        </li>
                    </Link>
                    <Link to='/gold'>
                        <li className="nav-item">
                            <a className="nav-link">Gold</a>
                        </li>
                    </Link>
                    <Link to='/foodcard'>
                        <li className="nav-item">
                            <a className="nav-link">Food Card</a>
                        </li>
                    </Link>
                    <Link to='/pf'>
                        <li className="nav-item">
                            <a className="nav-link">Provident Fund</a>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="mx-auto order-0">
                <Link to='/'>
                    <a className="navbar-brand mx-auto" href="#">Financial Dashboard</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><ProfileIcon /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><SettingsIcon /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;