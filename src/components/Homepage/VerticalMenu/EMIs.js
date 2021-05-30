import React from 'react';

function EMIsVMenu() {
    return (
        <div>
            {/* <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Money Invested</h5>
                        <p class="card-text">&#8377; 1,500.00</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Current Value</h5>
                        <p class="card-text">&#8377; 1,650.00</p>
                    </div>
                </div>
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h5 class="card-title">Profit/Loss</h5>
                        <p class="card-text">&#8377; 150.00</p>
                    </div>
                </div>
            </div> */}
            <div class="card bg-light mb-3">
                <div class="card-body">
                    <p class="text-muted text-center">Woohoo!! You have no EMIs.</p>
                </div>
            </div>
        </div>
    )
}

export default EMIsVMenu;