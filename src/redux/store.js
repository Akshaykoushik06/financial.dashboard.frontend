import { createStore } from 'redux';

const initialState = {
    netWorth: '10,000.00',
};

function reducer(state = initialState, action) {
    return state;
}

export const store = createStore(reducer);

// Actions
// export const
