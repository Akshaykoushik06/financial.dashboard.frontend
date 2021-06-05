import React from 'react';

function GoldVMenu() {
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
                    <p className="card-text">&#8377; 1,650.00</p>
                </div>
            </div>
            <div className="card bg-success text-white">
                <div className="card-body">
                    <h5 className="card-title">Profit/Loss</h5>
                    <p className="card-text">&#8377; 150.00</p>
                </div>
            </div>
        </div>
    )
}

export default GoldVMenu;