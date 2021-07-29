import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_BANK_ACC_TXNS_SUCCESSFUL =
    'Get Bank Account Details Successful';
export const SET_BANK_NAME = 'Set Bank Name Successful';
// export const GET_CREDIT_CARD_AMOUNT_SUCCESSFUL =
//     'Get Creditcard amount Successful';

// action creators

export function fetchBankTxns(bank) {
    return function fetchBankAccTxnsThunk(dispatch) {
        dispatch({ type: SET_LOADING_TRUE });
        axios
            .get(`/bankacc/getalltxns/${bank}`)
            .then((res) => {
                dispatch({
                    type: GET_BANK_ACC_TXNS_SUCCESSFUL,
                    payload: res.data,
                });
                dispatch({ type: SET_LOADING_FALSE });
            })
            .catch((err) => {
                dispatch({ type: SET_LOADING_FALSE });
                console.error(err);
            });
    };
}

// export function getBankAccTxnsThunk(dispatch) {
//     dispatch({ type: SET_LOADING_TRUE });
//     axios
//         .get('/bankacc/getalltxns/')
//         .then((res) => {
//             dispatch({ type: SET_LOADING_FALSE });
//             dispatch({
//                 type: GET_BANK_ACC_TXNS_SUCCESSFUL,
//                 payload: res.data,
//             });
//         })
//         .catch((err) => {
//             dispatch({ type: SET_LOADING_FALSE });
//             console.error(err);
//         });
// }

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
