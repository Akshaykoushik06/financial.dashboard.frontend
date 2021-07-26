import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_CREDIT_CARD_TXNS_SUCCESSFUL = 'Get Creditcard Txns Successful';
export const GET_CREDIT_CARD_AMOUNT_SUCCESSFUL =
    'Get Creditcard amount Successful';

// action creators
export function getCreditCardTxnsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/creditcard/gettxns/')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_CREDIT_CARD_TXNS_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}

// export function getCreditCardAmountThunk(dispatch) {
//     axios
//         .get('/api/creditcardamount/')
//         .then((res) => {
//             dispatch({
//                 type: GET_CREDIT_CARD_AMOUNT_SUCCESSFUL,
//                 payload: res.data,
//             });
//         })
//         .catch((err) => {
//             console.error(err);
//         });
// }
