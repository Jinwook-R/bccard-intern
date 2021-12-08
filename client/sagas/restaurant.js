import {restaurantlist} from '../api/ApiService';
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../reducers/restaurant';
import {RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAILURE} from "../reducers/restaurant";

function restaurantListAPI() {
    return restaurantlist();
}

function* restaurantList() {
    try {
        const result = yield call(restaurantListAPI);
        yield put({
            type: RESTAURANT_LIST_SUCCESS,
            payload: result,
        });

    } catch (err) {
        alert(err.error);
        yield put({
            type: RESTAURANT_LIST_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchRestaurantList() {
    yield takeEvery(actions.RESTAURANT_LIST_REQUEST, restaurantList);
}

export default function* restaurantSaga() {
    yield all([
        fork(watchRestaurantList),
    ]);
}