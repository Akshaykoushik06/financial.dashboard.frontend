import React from 'react';
import { useSelector } from 'react-redux';

// import { getAssets } from '../../../redux/homePage/selectors';

function MFVMenu() {
    // const mutualFunds = useSelector(getAssets).mutualFunds;

    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Money Invested</h5>
                    <p className="card-text">&#8377; 1236</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Current Value</h5>
                    <p className="card-text">&#8377; 1236</p>
                </div>
            </div>
            <div className="card bg-danger text-white">
                <div className="card-body">
                    <h5 className="card-title">Profit/Loss</h5>
                    <p className="card-text">&#8377; 1236</p>
                </div>
            </div>
        </div>
    );
}

export default MFVMenu;
