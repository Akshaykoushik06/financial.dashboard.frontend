import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';
import Buttons from './Buttons';
import { getLoanTxnsThunk } from '../../redux/loans/actions';

function LoansEMIsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoanTxnsThunk);
    });
    return (
        <div>
            <LifeTimeStats title="Loans" />
            <CurrentBalance />
            <Buttons />
            <Transactions />
        </div>
    );
}

export default LoansEMIsPage;
