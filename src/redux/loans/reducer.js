import { GET_LOAN_TXNS_SUCCESSFUL } from './actions';

const initialState = {
    amountRemaining: 0.0,
    monthsRemaining: 0,
    txns: [],
};

export function loansReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOAN_TXNS_SUCCESSFUL:
            return {
                ...state,
                amountRemaining: action.payload.amount_remaining,
                monthsRemaining: action.payload.months_remaining,
                txns: action.payload.txns,
            };
        default:
            return state;
    }
}
