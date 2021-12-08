export const initialState = {
    review: null,
};

export const REVIEW_REGISTER_REQUEST = 'RESTAURANT_LIST_REQUEST';
export const REVIEW_REGISTER_SUCCESS = 'RESTAURANT_LIST_SUCCESS';
export const REVIEW_REGISTER_FAILURE = 'RESTAURANT_LIST_FAILURE';

export const ReviewRegisterRequestAction = data => ({
    type: REVIEW_REGISTER_REQUEST,
});

export default (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case REVIEW_REGISTER_REQUEST: {
            return {
                ...state,
            };
        }
        case REVIEW_REGISTER_SUCCESS: {
            return {
                ...state,
                review: payload
            };
        }
        case REVIEW_REGISTER_FAILURE: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};