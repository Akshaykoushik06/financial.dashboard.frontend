import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import AmountToPay from './AmountToPay';
import Buttons from './Buttons';
import Transactions from './Transactions';
import UnbilledTransactions from './UnbilledTransactions';
import {
    getCreditCardTxnsThunk,
    getCreditCardAmountThunk,
} from '../../redux/creditCard/actions';

function CreditCardPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getCreditCardAmountThunk);
        dispatch(getCreditCardTxnsThunk);
    });
    return (
        <div>
            <LifeTimeStats title="Credit Card" />
            <AmountToPay />
            <Buttons />
            <Transactions />
            <UnbilledTransactions />
        </div>
    );
}

export default CreditCardPage;
