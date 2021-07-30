import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from '../../redux/loading/selectors';
import { monthsRemaining, amountRemaining } from '../../redux/loans/selectors';

function CurrentBalance() {
    const isLoading = useSelector(loading);
    const months = useSelector(monthsRemaining);
    const amount = useSelector(amountRemaining);

    // if (isLoading) {
    //     return <h1>loading...</h1>;
    // }
    return (
        <div className="jumbotron text-center">
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Loan Details</h5>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Principle Amount:
                            </span>
                            <span> &#8377; 97100</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">Interest:</span>
                            <span> 7.05%</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">Tenure:</span>
                            <span> 24 Months</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Loan Number:
                            </span>
                            <span> L2WHYD08809540</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Interest Amount:
                            </span>
                            <span> &#8377; 13708 </span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Total Amount to pay:
                            </span>
                            <span> &#8377; 110808 </span>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">EMI Details</h5>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Monthly EMI:
                            </span>
                            <span> &#8377; 4617</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Amount Remaining:
                            </span>
                            <span> &#8377; {amount}</span>
                        </p>
                        <p className="card-text text-left">
                            <span className="font-weight-bold">
                                Months Remaining:
                            </span>
                            <span> {months} Months</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentBalance;
