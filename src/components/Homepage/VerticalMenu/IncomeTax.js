import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { incomeTax } from '../../../redux/homePage/selectors';

function IncomeTaxVMenu() {
    const incomeTaxData = useSelector(incomeTax);

    return (
        // <div className="card-deck">
        //     <div className="card bg-danger text-white">
        //         <Link
        //             to="/incometax"
        //             style={{ color: '#FFF' }}
        //             className="text-decoration-none"
        //         >
        //             <div className="card-body">
        //                 <h5 className="card-title">Income Tax for FY21-22</h5>
        //                 <p className="card-text">&#8377; {incomeTax.tax}</p>
        //             </div>
        //         </Link>
        //     </div>
        //     <div className="card">
        //         <div className="card-body">
        //             <h5 className="card-title">Current Value</h5>
        //             <p className="card-text">&#8377; 2,000.00</p>
        //         </div>
        //     </div>
        //     <div className="card bg-success text-white">
        //         <div className="card-body">
        //             <h5 className="card-title">Profit/Loss</h5>
        //             <p className="card-text">&#8377; 500.00</p>
        //         </div>
        //     </div>
        // </div>
        <Link
            to="/incometax"
            style={{ color: '#000' }}
            className="text-decoration-none"
        >
            <div className="card bg-danger text-white">
                <div className="card-body">
                    <p className="card-text text-left">
                        <span className="font-weight-bold">
                            Tax for FY 21-22:
                        </span>
                        <span> &#8377; {incomeTaxData.tax_for_FY} </span>
                    </p>
                    <p className="card-text text-left">
                        <span className="font-weight-bold">Amount paid:</span>
                        <span> &#8377; {incomeTaxData.amount_paid} </span>
                    </p>
                    <p className="card-text text-left">
                        <span className="font-weight-bold">
                            Amount yet to be paid:
                        </span>
                        <span> &#8377; {incomeTaxData.amount_to_pay} </span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default IncomeTaxVMenu;
