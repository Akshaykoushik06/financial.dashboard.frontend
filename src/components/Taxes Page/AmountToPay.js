import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from '../../redux/loading/selectors';
import {
    taxPaidSoFar,
    remainingTax,
    taxForFY,
} from '../../redux/incomeTax/selectors';

function AmountToPay() {
    const isLoading = useSelector(loading);
    const taxToPay = useSelector(taxForFY);
    const paidSoFar = useSelector(taxPaidSoFar);
    const remaining = useSelector(remainingTax);

    // if (isLoading) {
    //     return <h1>loading...</h1>;
    // }
    return (
        <div className="jumbotron text-center">
            <div class="card-deck">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tax for FY 21-22</h5>
                        <p class="card-text">&#8377; {taxToPay}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tax paid so far</h5>
                        <p class="card-text">&#8377; {paidSoFar}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Remaining Amount</h5>
                        <p class="card-text">&#8377; {remaining}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmountToPay;
