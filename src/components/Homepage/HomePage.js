import React from 'react';

import Navbar from '../Shared/Navbar';
import Networth from './Networth';
import Assets from './Assets';
import Liabilities from './Liabilities';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Networth />
            <Assets />
            <Liabilities />
        </div>
    )
}

export default HomePage;
