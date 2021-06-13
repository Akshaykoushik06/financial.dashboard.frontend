import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getHomePageDetailsThunk } from '../../redux/homePage/actions';
import Networth from './Networth';
import Assets from './Assets';
import Liabilities from './Liabilities';
import { loading } from '../../redux/loading/selectors';

function HomePage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(loading);

    useEffect(() => {
        dispatch(getHomePageDetailsThunk);
    }, []);

    if (isLoading) {
        return <h1>loading...</h1>;
    }

    return (
        <div>
            <Networth />
            <Assets />
            <Liabilities />
        </div>
    );
}

export default HomePage;
