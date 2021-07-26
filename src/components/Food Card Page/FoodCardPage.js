import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import LifeTimeStats from '../Shared/LifetimeStats';
import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';
import Buttons from './Buttons';
import {
    getFoodCardBalanceThunk,
    getFoodCardTxnsThunk,
} from '../../redux/foodCard/actions';

function FoodCardPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoodCardBalanceThunk);
        dispatch(getFoodCardTxnsThunk);
    });

    return (
        <div>
            <LifeTimeStats title="Food Card" />
            <CurrentBalance />
            <Buttons />
            <Transactions />
        </div>
    );
}

export default FoodCardPage;
