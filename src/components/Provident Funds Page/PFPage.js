import React from 'react';

import LifeTimeStats from '../Shared/LifetimeStats';
import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';

function PFsPage() {
    return (
        <div>
            <LifeTimeStats title="Provident Fund" />
            <CurrentBalance />
            <Transactions />
        </div>
    );
}

export default PFsPage;
