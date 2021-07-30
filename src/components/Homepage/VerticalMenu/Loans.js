import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loans } from '../../../redux/homePage/selectors';

function LoansVMenu() {
    const loanData = useSelector(loans);

    return (
        <Link
            to="/loans"
            className="text-decoration-none"
            style={{ color: '#000000' }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Two Wheeler Loan</h5>
                    <p className="card-text text-left">
                        <span className="font-weight-bold">Amount paid:</span>
                        <span> &#8377; {loanData.amount_paid} </span>
                    </p>
                    <p className="card-text text-left">
                        <span className="font-weight-bold">
                            Total Amount to pay:
                        </span>
                        <span> &#8377; {loanData.amount_to_pay} </span>
                    </p>
                </div>
            </div>
        </Link>
        // <div className="card-deck">
        //     <div className="card">
        //         <div className="card-body">
        //             <h5 className="card-title">Current Value</h5>
        //             <p className="card-text">&#8377; 1,650.00</p>
        //         </div>
        //     </div>
        //     <div className="card bg-success text-white">
        //         <div className="card-body">
        //             <h5 className="card-title">Profit/Loss</h5>
        //             <p className="card-text">&#8377; 150.00</p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default LoansVMenu;
