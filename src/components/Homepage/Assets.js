import React from 'react';
import { useSelector } from 'react-redux';

import BankAccounts from './VerticalMenu/BankAccounts';
import StocksVMenu from './VerticalMenu/Stocks';
import MFVMenu from './VerticalMenu/MFVMenu';
import GoldVMenu from './VerticalMenu/Gold';
import PFVMenu from './VerticalMenu/PF';
import FoodCardVMenu from './VerticalMenu/FoodCard';
import { getAssets } from '../../redux/homePage/selectors';

function AssetsTrial() {
    const assets = useSelector(getAssets);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Assets</h1>
                <br />
                <div className="card text-center bg-dark text-white">
                    <div className="card-body">
                        <h5 className="card-title text-center">Total assets</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">
                            &#8377; {assets.totalAssets}
                        </p>
                    </div>
                </div>
                <br />
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Liquid assets</h5>
                            <p className="card-text">
                                &#8377; {assets.liquidAssets}
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Fixed Assets</h5>
                            <p className="card-text">
                                &#8377; {assets.fixedAssets}
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-3">
                        <div
                            className="nav flex-column nav-pills"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                        >
                            <a
                                className="nav-link active"
                                id="v-pills-bank-accounts-tab"
                                data-toggle="pill"
                                href="#v-pills-bank-accounts"
                                role="tab"
                                aria-controls="v-pills-bank-accounts"
                                aria-selected="true"
                            >
                                Bank Accounts
                            </a>
                            {/* <a
                                className="nav-link"
                                id="v-pills-stocks-tab"
                                data-toggle="pill"
                                href="#v-pills-stocks"
                                role="tab"
                                aria-controls="v-pills-stocks"
                                aria-selected="false"
                            >
                                Stocks
                            </a>
                            <a
                                className="nav-link"
                                id="v-pills-mutual-funds-tab"
                                data-toggle="pill"
                                href="#v-pills-mutual-funds"
                                role="tab"
                                aria-controls="v-pills-mutual-funds"
                                aria-selected="false"
                            >
                                Mutual Funds
                            </a>
                            <a
                                className="nav-link"
                                id="v-pills-gold-tab"
                                data-toggle="pill"
                                href="#v-pills-gold"
                                role="tab"
                                aria-controls="v-pills-gold"
                                aria-selected="false"
                            >
                                Gold
                            </a> */}
                            <a
                                className="nav-link"
                                id="v-pills-pf-tab"
                                data-toggle="pill"
                                href="#v-pills-pf"
                                role="tab"
                                aria-controls="v-pills-pf"
                                aria-selected="false"
                            >
                                Provident Fund
                            </a>
                            <a
                                className="nav-link"
                                id="v-pills-food-card-tab"
                                data-toggle="pill"
                                href="#v-pills-food-card"
                                role="tab"
                                aria-controls="v-pills-food-card"
                                aria-selected="false"
                            >
                                Food Card
                            </a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="v-pills-bank-accounts"
                                role="tabpanel"
                                aria-labelledby="v-pills-bank-accounts-tab"
                            >
                                <BankAccounts />
                            </div>
                            {/* <div
                                className="tab-pane fade"
                                id="v-pills-stocks"
                                role="tabpanel"
                                aria-labelledby="v-pills-stocks-tab"
                            >
                                <StocksVMenu />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-mutual-funds"
                                role="tabpanel"
                                aria-labelledby="v-pills-mutual-funds-tab"
                            >
                                <MFVMenu />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-gold"
                                role="tabpanel"
                                aria-labelledby="v-pills-gold-tab"
                            >
                                <GoldVMenu />
                            </div> */}
                            <div
                                className="tab-pane fade"
                                id="v-pills-pf"
                                role="tabpanel"
                                aria-labelledby="v-pills-pf-tab"
                            >
                                <PFVMenu />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-food-card"
                                role="tabpanel"
                                aria-labelledby="v-pills-food-card-tab"
                            >
                                <FoodCardVMenu />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </div>
        </div>
    );
}

export default AssetsTrial;
