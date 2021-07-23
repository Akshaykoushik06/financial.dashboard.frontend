import {
    GET_FOOD_CARD_TXNS_SUCCESSFUL,
    GET_FOOD_CARD_BALANCE_SUCCESSFUL,
} from './actions';

const initialState = {
    balance: 0.0,
    txns: [],
};

export function foodCardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FOOD_CARD_TXNS_SUCCESSFUL:
            return {
                ...state,
                txns: action.payload,
            };
        case GET_FOOD_CARD_BALANCE_SUCCESSFUL:
            return {
                ...state,
                balance: action.payload,
            };
        default:
            return state;
    }
}
