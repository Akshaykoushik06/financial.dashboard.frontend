const SET_DUMMY_REDUCER = 'Set dummy reducer';

const initialState = {
    dummyState: 'Temporary',
};

// reducer
export function dummyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DUMMY_REDUCER:
            return { dummyState: 'Temp state changed' };
        default:
            return state;
    }
}
