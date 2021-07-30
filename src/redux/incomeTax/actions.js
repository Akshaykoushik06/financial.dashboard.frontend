import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_INCOME_TAX_TXNS_SUCCESSFUL = 'Get Income tax txns successful';

// action creators
export function getIncomeTaxTxnsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/incometax/getalltxns/')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_INCOME_TAX_TXNS_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}
