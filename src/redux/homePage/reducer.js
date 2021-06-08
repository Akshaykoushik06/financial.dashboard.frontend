import { GET_HOMEPAGE_DATA_SUCCESSFUL, GET_HOMEPAGE_DATA } from './actions';

const initialState = {
    isLoading: false,
    netWorth: 18000,
    assets: {
        totalAssets: 1900.0,
        liquidAssets: 1350.0,
        fixedAssets: 635.0,
        bankAccounts: {
            icici: 2500.0,
            hdfc: 2500.25,
            iob: 2500.0,
            canara: 250.0,
        },
        stocks: {
            invested: 2000.0,
            curValue: 2500.0,
            profitLoss: 500.0,
        },
        mutualFunds: {
            invested: 1500.0,
            curValue: 1400.0,
            profitLoss: 100.0,
        },
        gold: {
            invested: 1500.0,
            curValue: 1650.0,
            profitLoss: 150.0,
        },
        providentFund: {
            value: 2350.0,
        },
        foodCard: {
            value: 1500.0,
        },
    },
    liabilities: {
        totalLiability: 10000.0,
        loans: {
            twoWheelerLoan: 5000.0,
        },
        creditCards: {
            dinersClub: 1500.0,
        },
        incomeTax: {
            tax: 3500.0,
        },
    },
};

// reducer
export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOMEPAGE_DATA:
            return { ...state, isLoading: true };
        case GET_HOMEPAGE_DATA_SUCCESSFUL:
            return {
                netWorth: action.payload.netWorth,
                assets: action.payload.assets,
                liabilities: action.payload.liabilities,
                isLoading: false,
            };
        default:
            return state;
    }
}
