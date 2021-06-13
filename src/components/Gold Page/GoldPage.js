import React from 'react';

import LifeTimeStats from '../Shared/LifetimeStats';
import GramsHeld from './GramsHeld';
import CurrentValue from './CurrentValue';

function GoldPage() {
    return (
        <div>
            <LifeTimeStats />
            <GramsHeld />
            <CurrentValue />
        </div>
    );
}

export default GoldPage;
