import React from 'react';

import CurrentBalance from './CurrentBalance';
import Transactions from './Transactions';

function PFsPage() {
    return (
        <div>
            <CurrentBalance />
            <Transactions />
        </div>
    );
}

export default PFsPage;
