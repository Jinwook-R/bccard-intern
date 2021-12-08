import {all, fork} from 'redux-saga/effects';

import userSaga from './user';
import restaurantSaga from './restaurant';
import reviewSaga from "./review";

export default function* rootSaga(){
    yield all([
        fork(userSaga),
        fork(restaurantSaga),
        fork(reviewSaga),
    ])
}