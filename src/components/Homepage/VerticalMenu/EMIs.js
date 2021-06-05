import React from 'react';

function EMIsVMenu() {
    return (
        <div>
            {/* <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Money Invested</h5>
                        <p className="card-text">&#8377; 1,500.00</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Current Value</h5>
                        <p className="card-text">&#8377; 1,650.00</p>
                    </div>
                </div>
                <div className="card bg-success text-white">
                    <div className="card-body">
                        <h5 className="card-title">Profit/Loss</h5>
                        <p className="card-text">&#8377; 150.00</p>
                    </div>
                </div>
            </div> */}
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <p className="text-muted text-center">Woohoo!! You have no EMIs.</p>
                </div>
            </div>
        </div>
    )
}

export default EMIsVMenu;