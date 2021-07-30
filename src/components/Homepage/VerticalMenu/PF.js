import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAssets } from '../../../redux/homePage/selectors';

function PFVMenu() {
    const providentFund = useSelector(getAssets).providentFund;

    return (
        <div className="card-deck">
            <div className="card">
                <Link
                    to="/pf"
                    // style={{ color: '#FFF' }}
                    className="text-decoration-none"
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            Employee Provident Fund (EPF)
                        </h5>
                        <p className="card-text">
                            &#8377; {providentFund.value}
                        </p>
                    </div>
                </Link>
            </div>
            {/* <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Current Value</h5>
                    <p className="card-text">&#8377; 2,000.00</p>
                </div>
            </div>
            <div className="card bg-success text-white">
                <div className="card-body">
                    <h5 className="card-title">Profit/Loss</h5>
                    <p className="card-text">&#8377; 500.00</p>
                </div>
            </div> */}
        </div>
    );
}

export default PFVMenu;
