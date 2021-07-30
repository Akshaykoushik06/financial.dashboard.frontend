import { GET_HOMEPAGE_DATA_SUCCESSFUL } from './actions';

// const initialState = {
//     netWorth: 18000,
//     assets: {
//         totalAssets: 1900.0,
//         liquidAssets: 1350.0,
//         fixedAssets: 635.0,
//         bankAccounts: {
//             icici: 2500.0,
//             hdfc: 2500.25,
//             iob: 2500.0,
//             canara: 250.0,
//         },
//         stocks: {
//             invested: 2000.0,
//             curValue: 2500.0,
//             profitLoss: 500.0,
//         },
//         mutualFunds: {
//             invested: 1500.0,
//             curValue: 1400.0,
//             profitLoss: 100.0,
//         },
//         gold: {
//             invested: 1500.0,
//             curValue: 1650.0,
//             profitLoss: 150.0,
//         },
//         providentFund: {
//             value: 2350.0,
//         },
//         foodCard: {
//             value: 1500.0,
//         },
//     },
//     liabilities: {
//         totalLiability: 10000.0,
//         loans: {
//             twoWheelerLoan: 5000.0,
//         },
//         creditCards: {
//             dinersClub: 1500.0,
//         },
//         incomeTax: {
//             tax: 3500.0,
//         },
//     },
// };

const initialState = {
    assets: {
        bankAccounts: {
            icici_balance: 0.0,
            hdfc_balance: 0.0,
            iob_balance: 0.0,
            canara_balance: 0.0,
        },
        pfBalance: 0.0,
        foodcardBalance: 0.0,
    },
    liabilities: {
        loans: {
            amount_paid: 0.0,
            amount_to_pay: 0.0,
        },
        credit_card_statement: 0.0,
        income_tax: {
            tax_for_FY: 0.0,
            amount_paid: 0.0,
            amount_to_pay: 0.0,
        },
    },
    headlines: {
        networth: 0.0,
        total_assets: 0.0,
        liquid_assets: 0.0,
        fixed_assets: 0.0,
        total_liability: 0.0,
    },
};

// reducer
export function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOMEPAGE_DATA_SUCCESSFUL:
            return {
                ...state,
                assets: action.payload.assets,
                liabilities: action.payload.liabilities,
                headlines: action.payload.headlines,
            };
        default:
            return state;
    }
}
