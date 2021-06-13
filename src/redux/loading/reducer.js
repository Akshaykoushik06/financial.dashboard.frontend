import { SET_LOADING_TRUE, SET_LOADING_FALSE } from './actions';

const initialState = {
    isLoading: false,
};

// reducer
export function loadingStateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING_TRUE:
            return { isLoading: true };
        case SET_LOADING_FALSE:
            return { isLoading: false };
        default:
            return state;
    }
}
