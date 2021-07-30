import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import AmountToPay from './AmountToPay';
import Buttons from './Buttons';
import Transactions from './Transactions';
import { getIncomeTaxTxnsThunk } from '../../redux/incomeTax/actions';

function TaxesPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIncomeTaxTxnsThunk);
    });
    return (
        <div>
            <LifeTimeStats title="Income Tax" />
            <AmountToPay />
            <Buttons />
            <Transactions />
        </div>
    );
}

export default TaxesPage;
