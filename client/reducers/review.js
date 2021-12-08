export const initialState = {
    review: null,
};

export const REVIEW_REGISTER_REQUEST = 'REVIEW_REGISTER_REQUEST';
export const REVIEW_REGISTER_SUCCESS = 'REVIEW_REGISTER_SUCCESS';
export const REVIEW_REGISTER_FAILURE = 'REVIEW_REGISTER_FAILURE';

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