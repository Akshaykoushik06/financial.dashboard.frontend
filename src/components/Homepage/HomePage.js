import React from 'react';

import Networth from './Networth';
import Assets from './Assets';
import Liabilities from './Liabilities';

function HomePage() {
    return (
        <div>
            <Networth />
            <Assets />
            <Liabilities />
        </div>
    );
}

export default HomePage;
