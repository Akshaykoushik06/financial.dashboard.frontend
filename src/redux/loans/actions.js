import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_LOAN_TXNS_SUCCESSFUL = 'Get Foodcard data Successful';

// action creators
export function getLoanTxnsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/loans/getalltxns/')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_LOAN_TXNS_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}
