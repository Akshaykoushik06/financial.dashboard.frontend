import { GET_PF_TXNS_SUCCESSFUL } from './actions';

const initialState = {
    balance: 0.0,
    txns: [],
};

export function pfReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PF_TXNS_SUCCESSFUL:
            return {
                ...state,
                balance: action.payload.balance,
                txns: action.payload.txns,
            };
        default:
            return state;
    }
}
