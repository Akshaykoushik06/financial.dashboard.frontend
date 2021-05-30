import React from 'react';

import BankAccounts from './VerticalMenu/BankAccounts';
import StocksVMenu from './VerticalMenu/Stocks';
import MFVMenu from './VerticalMenu/MFVMenu';
import GoldVMenu from './VerticalMenu/Gold';
import PFVMenu from './VerticalMenu/PF';
import FoodCardVMenu from './VerticalMenu/FoodCard';

function AssetsTrial() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Assets</h1>
                <br />
                <div className="card text-center bg-dark text-white">
                    <div className="card-body">
                        <h5 className="card-title text-center">Total assets</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">&#8377; 19,400.00</p>
                    </div>
                </div>
                <br />
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Liquid assets</h5>
                            <p class="card-text">&#8377; 13,050.00</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Fixed Assets</h5>
                            <p class="card-text">&#8377; 6,350.00</p>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-bank-accounts-tab" data-toggle="pill" href="#v-pills-bank-accounts" role="tab" aria-controls="v-pills-bank-accounts" aria-selected="true">Bank Accounts</a>
                            <a class="nav-link" id="v-pills-stocks-tab" data-toggle="pill" href="#v-pills-stocks" role="tab" aria-controls="v-pills-stocks" aria-selected="false">Stocks</a>
                            <a class="nav-link" id="v-pills-mutual-funds-tab" data-toggle="pill" href="#v-pills-mutual-funds" role="tab" aria-controls="v-pills-mutual-funds" aria-selected="false">Mutual Funds</a>
                            <a class="nav-link" id="v-pills-gold-tab" data-toggle="pill" href="#v-pills-gold" role="tab" aria-controls="v-pills-gold" aria-selected="false">Gold</a>
                            <a class="nav-link" id="v-pills-pf-tab" data-toggle="pill" href="#v-pills-pf" role="tab" aria-controls="v-pills-pf" aria-selected="false">Provident Fund</a>
                            <a class="nav-link" id="v-pills-food-card-tab" data-toggle="pill" href="#v-pills-food-card" role="tab" aria-controls="v-pills-food-card" aria-selected="false">Food Card</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-bank-accounts" role="tabpanel" aria-labelledby="v-pills-bank-accounts-tab"><BankAccounts /></div>
                            <div class="tab-pane fade" id="v-pills-stocks" role="tabpanel" aria-labelledby="v-pills-stocks-tab"><StocksVMenu /></div>
                            <div class="tab-pane fade" id="v-pills-mutual-funds" role="tabpanel" aria-labelledby="v-pills-mutual-funds-tab"><MFVMenu /></div>
                            <div class="tab-pane fade" id="v-pills-gold" role="tabpanel" aria-labelledby="v-pills-gold-tab"><GoldVMenu /></div>
                            <div class="tab-pane fade" id="v-pills-pf" role="tabpanel" aria-labelledby="v-pills-pf-tab"><PFVMenu /></div>
                            <div class="tab-pane fade" id="v-pills-food-card" role="tabpanel" aria-labelledby="v-pills-food-card-tab"><FoodCardVMenu /></div>
                        </div>
                    </div>
                </div>
                <br />
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </div>
        </div>
    )
}

export default AssetsTrial;