import axios from 'axios';

import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_HOMEPAGE_DATA_SUCCESSFUL = 'Get Homepage Data Successful';

// axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.withCredentials = true;
// action creators
export function getHomePageDetailsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    // axios
    //     .get('/api/networth')
    //     .then((res) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         dispatch({
    //             type: GET_HOMEPAGE_DATA_SUCCESSFUL,
    //             payload: res.data,
    //         });
    //     })
    //     .catch((err) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         console.error(err);
    //     });
    // const csrftoken = localStorage.get('csrftoken');
    // const config = {
    //     headers: {
    //         'X-CSRFToken': csrftoken,
    //     },
    // };
    const data = {
        _id: '60f83b5c3bdb8c63f7680907',
        title: 'test3',
        description: 'edited again from frontend',
        completed: false,
    };
    // axios
    //     .post('/api/networth/', data)
    //     .then((res) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         console.log('set the data successfully', res);
    //     })
    //     .catch((err) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         console.error(err);
    //     });
    axios
        .put('/api/networth/', data)
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.log('set the data successfully', res);
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
    // const data = {
    //     _id: '60f83b6d3bdb8c63f7680908',
    // };
    // axios
    //     .delete('/api/networth/', { data: data })
    //     .then((res) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         console.log('set the data successfully', res);
    //     })
    //     .catch((err) => {
    //         dispatch({ type: SET_LOADING_FALSE });
    //         console.error(err);
    //     });
}
