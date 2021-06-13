import axios from 'axios';

import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_HOMEPAGE_DATA_SUCCESSFUL = 'Get Homepage Data Successful';

// action creators
export function getHomePageDetailsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/api/networth')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_HOMEPAGE_DATA_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}
