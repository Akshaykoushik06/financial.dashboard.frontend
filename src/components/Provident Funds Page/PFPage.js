import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';
import Buttons from './Buttons';
import { getPFTxnsThunk } from '../../redux/pf/actions';

function PFsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPFTxnsThunk);
    });
    return (
        <div>
            <LifeTimeStats title="Provident Fund" />
            <CurrentBalance />
            <Buttons />
            <Transactions />
        </div>
    );
}

export default PFsPage;
