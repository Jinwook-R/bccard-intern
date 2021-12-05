import {all, fork} from 'redux-saga/effects';

import userSaga from './user';
import restaurantSaga from './restaurant';

export default function* rootSaga(){
    yield all([
        fork(userSaga),
        fork(restaurantSaga),
    ])
}