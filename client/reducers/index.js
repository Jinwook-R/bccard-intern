import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import restaurant from "./restaurant";
import review from './review';

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                user,
                restaurant,
                review
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;

