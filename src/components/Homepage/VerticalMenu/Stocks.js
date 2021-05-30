import React from 'react';

// import InfoIcon from '../../../icons/Info';

function StocksVMenu() {
    return (
        <div>
            <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Money Invested</h5>
                        <p class="card-text">&#8377; 2,000.00</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Current Value</h5>
                        <p class="card-text">&#8377; 2,500.00</p>
                    </div>
                </div>
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h5 class="card-title">Profit/Loss</h5>
                        <p class="card-text">&#8377; 500.00</p>
                    </div>
                </div>
            </div>
            {/* <div class="badge badge-pill badge-primary float-right"><InfoIcon /> Click here for more information</div> */}
        </div>
    )
}

export default StocksVMenu;