import React from 'react';

import LifeTimeStats from '../Shared/LifetimeStats';
import NextToSell from './NextToSell';
import StocksHeld from './StocksHeld';
import StocksSold from './StocksSold';

function StocksPage() {
    return (
        <div>
            <LifeTimeStats title="Stocks" />
            <NextToSell />
            <StocksHeld />
            <StocksSold />
        </div>
    );
}

export default StocksPage;
