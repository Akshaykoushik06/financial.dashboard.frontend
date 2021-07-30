import React from 'react';
import { useSelector } from 'react-redux';

import { netWorth } from '../../redux/homePage/selectors';

function Networth() {
    const data = useSelector(netWorth);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Networth</h1>
                <br />
                <h2 className="h1 text-center">&#8377; {data}</h2>
                {/* <br />
                <p className="lead text-center">(Assets - Liabilities)</p> */}
            </div>
        </div>
    );
}

export default Networth;
