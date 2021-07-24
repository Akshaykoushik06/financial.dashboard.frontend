import React from 'react';
import { useSelector } from 'react-redux';

import { getFoodCardBalance } from '../../../redux/homePage/selectors';

function FoodCardVMenu() {
    const foodCardBalance = useSelector(getFoodCardBalance);

    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Happay Food Card</h5>
                    <p className="card-text">&#8377; {foodCardBalance}</p>
                </div>
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

export default FoodCardVMenu;
