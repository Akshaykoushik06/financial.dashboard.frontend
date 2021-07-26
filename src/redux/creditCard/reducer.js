import {
    GET_CREDIT_CARD_TXNS_SUCCESSFUL,
    GET_CREDIT_CARD_AMOUNT_SUCCESSFUL,
} from './actions';

const initialState = {
    currentStatementTxns: [],
    amountToPay: 0.0,
    lastPaidBill: {},
    unbilledTxns: [],
};

export function creditCardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CREDIT_CARD_TXNS_SUCCESSFUL:
            console.log(action.payload);
            return {
                ...state,
                currentStatementTxns: action.payload.current_statement_txns,
                amountToPay: action.payload.amount,
                lastPaidBill: action.payload.last_paid_bill,
                unbilledTxns: action.payload.unbilled_txns,
            };
        case GET_CREDIT_CARD_AMOUNT_SUCCESSFUL:
            return {
                ...state,
                amountToPay: action.payload,
            };
        default:
            return state;
    }
}
