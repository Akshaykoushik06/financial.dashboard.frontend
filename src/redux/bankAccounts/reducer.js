import { GET_BANK_ACC_TXNS_SUCCESSFUL, SET_BANK_NAME } from './actions';

const initialState = {
    bankName: '',
    balance: 0.0,
    txns: [],
};

export function bankAccReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BANK_ACC_TXNS_SUCCESSFUL:
            return {
                ...state,
                balance: action.payload.balance,
                txns: action.payload.txns,
            };
        case SET_BANK_NAME:
            return {
                ...state,
                bankName: action.payload,
            };
        default:
            return state;
    }
}
