import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { getLiabilities } from '../../../redux/homePage/selectors';
import { currentBill } from '../../../redux/creditCard/selectors';

function CreditCardsVMenu() {
    const data = useSelector(currentBill);

    return (
        <div className="card-deck">
            <div className="card">
                <Link
                    to="/creditcard"
                    className="text-decoration-none"
                    style={{ color: '#000' }}
                >
                    <div className="card-body">
                        <h5 className="card-title">Diners Club Millennia</h5>
                        <p className="card-text">&#8377; {data}</p>
                    </div>
                </Link>
            </div>
            {/* <div className="card">
                </div>
                <div className="card-body">
                <h5 className="card-title">Current Value</h5>
                <p className="card-text">&#8377; 1,650.00</p>
                </div>
                </div>
                <div className="card bg-success text-white">
                <div className="card-body">
                <h5 className="card-title">Profit/Loss</h5>
                <p className="card-text">&#8377; 150.00</p>
                </div>
            </div> */}
        </div>
    );
}

export default CreditCardsVMenu;
