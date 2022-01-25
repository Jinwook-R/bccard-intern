export const initialState = {
    restaurantList: null, // 음식점 정보
};

export const RESTAURANT_LIST_REQUEST = 'RESTAURANT_LIST_REQUEST';
export const RESTAURANT_LIST_SUCCESS = 'RESTAURANT_LIST_SUCCESS';
export const RESTAURANT_LIST_FAILURE = 'RESTAURANT_LIST_FAILURE';

export const restaurantListRequestAction = data => ({
    type: RESTAURANT_LIST_REQUEST,
});

export default (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case RESTAURANT_LIST_REQUEST: {
            return {
                ...state,
            };
        }
        case RESTAURANT_LIST_SUCCESS: {
            return {
                ...state,
                restaurantList: payload
            };
        }
        case RESTAURANT_LIST_FAILURE: {
            return {
                ...state,
            };
        }
       default:
            return state;
    }
};