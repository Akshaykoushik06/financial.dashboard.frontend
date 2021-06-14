import React from 'react';

import LifeTimeStats from '../Shared/LifetimeStats';
import UnitsHeld from './UnitsHeld';
import UnitsSold from './UnitsSold';

function MFsPage() {
    return (
        <div>
            <LifeTimeStats title="Mutual Funds" stats={true} />
            <UnitsHeld />
            <UnitsSold />
        </div>
    );
}

export default MFsPage;
