import React from 'react';
import { useSelector } from 'react-redux';

// import InfoIcon from '../../../icons/Info';
import { getAssets } from '../../../redux/homePage/selectors';

function StocksVMenu() {
    const stocks = useSelector(getAssets).stocks;

    return (
        <div>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Money Invested</h5>
                        <p className="card-text">&#8377; {stocks.invested}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Current Value</h5>
                        <p className="card-text">&#8377; {stocks.curValue}</p>
                    </div>
                </div>
                <div className="card bg-success text-white">
                    <div className="card-body">
                        <h5 className="card-title">Profit/Loss</h5>
                        <p className="card-text">&#8377; {stocks.profitLoss}</p>
                    </div>
                </div>
            </div>
            {/* <div className="badge badge-pill badge-primary float-right"><InfoIcon /> Click here for more information</div> */}
        </div>
    );
}

export default StocksVMenu;
