import React from 'react';
import { useSelector } from 'react-redux';

import { getLiabilities } from '../../../redux/homePage/selectors';

function CreditCardsVMenu() {
    const creditCards = useSelector(getLiabilities).creditCards;

    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Diners Club Millennia</h5>
                    <p className="card-text">
                        &#8377; {creditCards.dinersClub}
                    </p>
                </div>
            </div>
            {/* <div className="card">
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
