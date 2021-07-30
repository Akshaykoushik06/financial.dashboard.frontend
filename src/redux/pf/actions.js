import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_PF_TXNS_SUCCESSFUL = 'Get PF txns successful';

// action creators
export function getPFTxnsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/pf/getalltxns/')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_PF_TXNS_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}
