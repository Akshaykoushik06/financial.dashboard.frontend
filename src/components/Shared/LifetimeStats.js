import React from 'react';

function LifeTimeStats(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-5 sticky-top">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <div className="card text-white bg-secondary mb-3 text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Lifetime Investment
                                </h5>
                                <p className="card-text"> 50,000.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mx-auto order-0">
                <h1>{props.title}</h1>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="card text-white bg-secondary mb-3 text-center">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Lifetime Profit/Loss
                                </h5>
                                <p className="card-text"> 50,000.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LifeTimeStats;
