import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { homePageReducer } from './homePage/reducer';
import { loadingStateReducer } from './loading/reducer';
import { dummyReducer } from './anotherStore/reducer';
import { foodCardReducer } from './foodCard/reducer';
import { creditCardReducer } from './creditCard/reducer';
import { bankAccReducer } from './bankAccounts/reducer';
import { loansReducer } from './loans/reducer';
import { incomeTaxReducer } from './incomeTax/reducer';
import { pfReducer } from './pf/reducer';

const rootReducer = combineReducers({
    pf: pfReducer,
    tax: incomeTaxReducer,
    loans: loansReducer,
    bankAcc: bankAccReducer,
    homePage: homePageReducer,
    loading: loadingStateReducer,
    foodCard: foodCardReducer,
    creditCard: creditCardReducer,
    dummy: dummyReducer,
});

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, enhancers);
