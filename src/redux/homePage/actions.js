import axios from 'axios';

// action types
export const GET_HOMEPAGE_DATA = 'Get Homepage Data';
export const GET_HOMEPAGE_DATA_SUCCESSFUL = 'Get Homepage Data Successful';

// action creators
export function getHomePageDetailsThunk(dispatch) {
    dispatch({ type: GET_HOMEPAGE_DATA });
    axios
        .get('/api/networth')
        .then((res) =>
            dispatch({
                type: GET_HOMEPAGE_DATA_SUCCESSFUL,
                payload: res.data,
            })
        )
        .catch((err) => console.log(err.message));
}
