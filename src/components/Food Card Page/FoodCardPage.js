import React from 'react';

import LifeTimeStats from '../Shared/LifetimeStats';
import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';

function FoodCardPage() {
    return (
        <div>
            <LifeTimeStats title="Food Card" />
            <CurrentBalance />
            <Transactions />
        </div>
    );
}

export default FoodCardPage;
