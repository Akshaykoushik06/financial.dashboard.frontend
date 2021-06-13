import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { homePageReducer } from './homePage/reducer';
import { loadingStateReducer } from './loading/reducer';
import { dummyReducer } from './anotherStore/reducer';

const rootReducer = combineReducers({
    homePage: homePageReducer,
    loading: loadingStateReducer,
    dummy: dummyReducer,
});

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(rootReducer, enhancers);
