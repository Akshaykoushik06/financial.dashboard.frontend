import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Networth() {
    // const netWorth = useSelector((state) => state.netWorth);
    const [netWorth, setNetWorth] = useState(0);

    useEffect(() => {
        axios
            .get('/api/networth')
            .then((res) => setNetWorth(res.data))
            .catch((err) => console.log(err));
    }, [netWorth]);

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Networth</h1>
                <br />
                <h2 className="h1 text-center">&#8377; {netWorth}</h2>
                {/* <br />
                <p className="lead text-center">(Assets - Liabilities)</p> */}
            </div>
        </div>
    );
}

export default Networth;
