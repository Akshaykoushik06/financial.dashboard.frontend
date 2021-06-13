import React from 'react';

import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';

function FoodCardPage() {
    return (
        <div>
            <CurrentBalance />
            <Transactions />
        </div>
    );
}

export default FoodCardPage;
