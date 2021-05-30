import React from 'react';

function MFVMenu() {
    return (
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Money Invested</h5>
                    <p class="card-text">&#8377; 1,500.00</p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Current Value</h5>
                    <p class="card-text">&#8377; 1,400.00</p>
                </div>
            </div>
            <div class="card bg-danger text-white">
                <div class="card-body">
                    <h5 class="card-title">Profit/Loss</h5>
                    <p class="card-text">&#8377; 100.00</p>
                </div>
            </div>
        </div>
    )
}

export default MFVMenu;