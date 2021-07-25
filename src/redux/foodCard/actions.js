import axios from 'axios';
import { SET_LOADING_TRUE, SET_LOADING_FALSE } from '../loading/actions';

// action types
export const GET_FOOD_CARD_TXNS_SUCCESSFUL = 'Get Foodcard data Successful';
export const GET_FOOD_CARD_BALANCE_SUCCESSFUL =
    'Get Foodcard balance Successful';

// action creators
export function getFoodCardTxnsThunk(dispatch) {
    dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/foodcard/getalltxns/')
        .then((res) => {
            dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_FOOD_CARD_TXNS_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}

export function getFoodCardBalanceThunk(dispatch) {
    // dispatch({ type: SET_LOADING_TRUE });
    axios
        .get('/api/foodcardbalance/')
        .then((res) => {
            // dispatch({ type: SET_LOADING_FALSE });
            dispatch({
                type: GET_FOOD_CARD_BALANCE_SUCCESSFUL,
                payload: res.data,
            });
        })
        .catch((err) => {
            // dispatch({ type: SET_LOADING_FALSE });
            console.error(err);
        });
}
