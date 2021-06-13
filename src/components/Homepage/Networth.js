import React from 'react';
import { useSelector } from 'react-redux';

import { getNetworth } from '../../redux/homePage/selectors';

function Networth() {
    const netWorth = useSelector(getNetworth);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Networth</h1>
                <br />
                <h2 className="h1 text-center">&#8377; {netWorth}</h2>
                {/* <br />
                <p className="lead text-center">(Assets - Liabilities)</p> */}
            </div>
        </div>
    );
}

export default Networth;
