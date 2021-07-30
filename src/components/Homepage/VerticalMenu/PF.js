import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { pfBalance } from '../../../redux/homePage/selectors';

function PFVMenu() {
    const providentFund = useSelector(pfBalance);

    return (
        <div className="card-deck">
            <div className="card">
                <Link
                    to="/pf"
                    style={{ color: '#000' }}
                    className="text-decoration-none"
                >
                    <div className="card-body">
                        <h5 className="card-title">
                            Employee Provident Fund (EPF)
                        </h5>
                        <p className="card-text">&#8377; {providentFund}</p>
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
