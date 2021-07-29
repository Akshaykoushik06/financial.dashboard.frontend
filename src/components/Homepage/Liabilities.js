import React from 'react';
import { useSelector } from 'react-redux';

import LoansVMenu from './VerticalMenu/Loans';
import EMIsVMenu from './VerticalMenu/EMIs';
import CreditCardsVMenu from './VerticalMenu/CreditCards';
import IncomeTaxVMenu from './VerticalMenu/IncomeTax';
import { getLiabilities } from '../../redux/homePage/selectors';

function Liabilities() {
    const liabilities = useSelector(getLiabilities);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Liabilities</h1>
                <br />
                <div className="card text-center bg-danger text-white">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Total liability
                        </h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">
                            &#8377; {liabilities.totalLiability}
                        </p>
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
                                id="v-pills-loans-tab"
                                data-toggle="pill"
                                href="#v-pills-loans"
                                role="tab"
                                aria-controls="v-pills-loans"
                                aria-selected="true"
                            >
                                Loans
                            </a>
                            {/* <a
                                className="nav-link"
                                id="v-pills-emis-tab"
                                data-toggle="pill"
                                href="#v-pills-emis"
                                role="tab"
                                aria-controls="v-pills-emis"
                                aria-selected="false"
                            >
                                EMIs
                            </a> */}
                            <a
                                className="nav-link"
                                id="v-pills-credit-cards-tab"
                                data-toggle="pill"
                                href="#v-pills-credit-cards"
                                role="tab"
                                aria-controls="v-pills-credit-cards"
                                aria-selected="false"
                            >
                                Credit Cards
                            </a>
                            <a
                                className="nav-link"
                                id="v-pills-income-tax-tab"
                                data-toggle="pill"
                                href="#v-pills-income-tax"
                                role="tab"
                                aria-controls="v-pills-income-tax"
                                aria-selected="false"
                            >
                                Income Tax
                            </a>
                            {/* <a className="nav-link" id="v-pills-pf-tab" data-toggle="pill" href="#v-pills-pf" role="tab" aria-controls="v-pills-pf" aria-selected="false">Provident Fund</a>
                            <a className="nav-link" id="v-pills-food-card-tab" data-toggle="pill" href="#v-pills-food-card" role="tab" aria-controls="v-pills-food-card" aria-selected="false">Food Card</a> */}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="v-pills-loans"
                                role="tabpanel"
                                aria-labelledby="v-pills-loans-tab"
                            >
                                <LoansVMenu />
                            </div>
                            {/* <div
                                className="tab-pane fade"
                                id="v-pills-emis"
                                role="tabpanel"
                                aria-labelledby="v-pills-emis-tab"
                            >
                                <EMIsVMenu />
                            </div> */}
                            <div
                                className="tab-pane fade"
                                id="v-pills-credit-cards"
                                role="tabpanel"
                                aria-labelledby="v-pills-credit-cards-tab"
                            >
                                <CreditCardsVMenu />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="v-pills-income-tax"
                                role="tabpanel"
                                aria-labelledby="v-pills-income-tax-tab"
                            >
                                <IncomeTaxVMenu />
                            </div>
                            {/* <div className="tab-pane fade" id="v-pills-pf" role="tabpanel" aria-labelledby="v-pills-pf-tab"><PFVMenu /></div>
                            <div className="tab-pane fade" id="v-pills-food-card" role="tabpanel" aria-labelledby="v-pills-food-card-tab"><FoodCardVMenu /></div> */}
                        </div>
                    </div>
                </div>
                <br />
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </div>
        </div>
    );
}

export default Liabilities;
