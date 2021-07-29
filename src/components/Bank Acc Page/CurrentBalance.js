import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from '../../redux/loading/selectors';
import { bankAccBalance } from '../../redux/bankAccounts/selectors';

function CurrentBalance() {
    const isLoading = useSelector(loading);
    const data = useSelector(bankAccBalance);

    // if (isLoading) {
    //     return <h1>loading...</h1>;
    // }
    return (
        <div className="jumbotron text-center">
            <div className="container">
                <h1 className="display-4">Current Balance</h1>
                <hr className="my-4" />
                <p className="lead">&#8377; {data}</p>
            </div>
        </div>
    );
}

export default CurrentBalance;
