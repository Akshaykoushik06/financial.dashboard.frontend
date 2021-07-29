import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import Buttons from './Buttons';
import Transactions from './Transactions';
import CurrentBalance from './CurrentBalance';
// import { getBankAccTxnsThunk } from '../../redux/bankAccounts/actions';
import { fetchBankTxns, SET_BANK_NAME } from '../../redux/bankAccounts/actions';

function BankAcc(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_BANK_NAME, payload: props.location.state.bank });
        dispatch(fetchBankTxns(props.location.state.bank));
    }, []);
    let headline = `${props.location.state.bank}`.toUpperCase();
    return (
        <div>
            <LifeTimeStats title={headline} />
            <CurrentBalance />
            <Buttons />
            <Transactions />
        </div>
    );
}

export default BankAcc;
