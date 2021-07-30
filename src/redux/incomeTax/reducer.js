import { GET_INCOME_TAX_TXNS_SUCCESSFUL } from './actions';

const initialState = {
    taxForFY: 0.0,
    taxPaidSoFar: 0.0,
    remainingTax: 0.0,
    txns: [],
};

export function incomeTaxReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INCOME_TAX_TXNS_SUCCESSFUL:
            return {
                ...state,
                taxForFY: action.payload.tax_for_FY,
                taxPaidSoFar: action.payload.tax_paid_so_far,
                remainingTax: action.payload.remaining_tax,
                txns: action.payload.txns,
            };
        default:
            return state;
    }
}
