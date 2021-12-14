export const initialState = {
    review: null,
};

export const REVIEW_REGISTER_REQUEST = 'REVIEW_REGISTER_REQUEST';
export const REVIEW_REGISTER_SUCCESS = 'REVIEW_REGISTER_SUCCESS';
export const REVIEW_REGISTER_FAILURE = 'REVIEW_REGISTER_FAILURE';

export const REVIEW_FILE_REGISTER_REQUEST = 'REVIEW_REGISTER_REQUEST';
export const REVIEW_FILE_REGISTER_SUCCESS = 'REVIEW_REGISTER_SUCCESS';
export const REVIEW_FILE_REGISTER_FAILURE = 'REVIEW_REGISTER_FAILURE';

export const MY_REVIEW_LIST_REQUEST = 'MY_REVIEW_LIST_REQUEST';
export const MY_REVIEW_LIST_SUCCESS = 'MY_REVIEW_LIST_SUCCESS';
export const MY_REVIEW_LIST_FAILURE = 'MY_REVIEW_LIST_FAILURE';


export const ReviewRegisterRequestAction = data => ({
    type: REVIEW_REGISTER_REQUEST,
    payload: {
        review: data,
    },
});

export const ReviewFileRegisterRequestAction = data =>({
    type: REVIEW_FILE_REGISTER_REQUEST,
    payload: {
        file: data,
    },
})

export const MyReviewListRequestAction = data => ({
    type: MY_REVIEW_LIST_REQUEST,
    payload: {
        userId: data
    }

})

export default (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case REVIEW_REGISTER_REQUEST: {
            console.log("REVIEW_REGISTER_REQUEST");
            return {
                ...state,
            };
        }
        case REVIEW_REGISTER_SUCCESS: {
            console.log("REVIEW_REGISTER_SUCCESS");
            return {
                ...state,
                review: payload
            };
        }
        case REVIEW_REGISTER_FAILURE: {
            console.log("REVIEW_REGISTER_FAILURE");
            return {
                ...state,
            };
        }
        case MY_REVIEW_LIST_REQUEST: {
            console.log("MY_REVIEW_LIST_REQUEST");
            return {
                ...state,
            };
        }
        case MY_REVIEW_LIST_SUCCESS: {
            console.log("MY_REVIEW_LIST_SUCCESS");
            return {
                ...state,
                review: payload
            };
        }
        case MY_REVIEW_LIST_FAILURE: {
            console.log("MY_REVIEW_LIST_FAILURE");
            return {
                ...state,
            };
        }
        case REVIEW_FILE_REGISTER_REQUEST: {
            console.log("REVIEW_FILE_REGISTER_REQUEST");
            return {
                ...state,
            };
        }
        case REVIEW_FILE_REGISTER_SUCCESS: {
            console.log("REVIEW_FILE_REGISTER_SUCCESS");
            return {
                ...state,
                review: payload
            };
        }
        case REVIEW_FILE_REGISTER_FAILURE: {
            console.log("REVIEW_FILE_REGISTER_FAILURE");
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};