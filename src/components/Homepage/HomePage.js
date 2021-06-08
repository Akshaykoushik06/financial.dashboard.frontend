import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getHomePageDetailsThunk } from '../../redux/homePage/actions';
import Networth from './Networth';
import Assets from './Assets';
import Liabilities from './Liabilities';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomePageDetailsThunk);
    }, [useEffect]);

    return (
        <div>
            <Networth />
            <Assets />
            <Liabilities />
        </div>
    );
}

export default HomePage;
