import React from 'react';
import { useSelector } from 'react-redux';
import { balance } from '../../redux/pf/selectors';
function CurrentBalance() {
    const data = useSelector(balance);
    return (
        <div class="jumbotron text-center">
            <div className="container">
                <h1 class="display-4">Current Balance</h1>
                <hr class="my-4" />
                <p className="lead">&#8377; {data}</p>
            </div>
        </div>
    );
}

export default CurrentBalance;
