import React from 'react';

function MFVMenu() {
    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Money Invested</h5>
                    <p className="card-text">&#8377; 1,500.00</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Current Value</h5>
                    <p className="card-text">&#8377; 1,400.00</p>
                </div>
            </div>
            <div className="card bg-danger text-white">
                <div className="card-body">
                    <h5 className="card-title">Profit/Loss</h5>
                    <p className="card-text">&#8377; 100.00</p>
                </div>
            </div>
        </div>
    )
}

export default MFVMenu;