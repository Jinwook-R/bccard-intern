import {restaurantlist} from '../api/ApiService';
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../reducers/user';
import {SIGN_IN_FAILURE} from "../reducers/user";
import {RESTAURANT_LIST_SUCCESS} from "../reducers/restaurant";

function restaurantListAPI() {
    return restaurantlist();
}

function* restaurantList() {
    try {
        const result = yield call(restaurantListAPI);
        yield put({ //put -> dispatch와 동일
            type: RESTAURANT_LIST_SUCCESS,
            payload: result,
        });

    } catch (err) {
        alert(err.error);
        yield put({
            type: SIGN_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchSignIn() {
    yield takeEvery(actions.SIGN_IN_REQUEST, signIn);
    // yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);
}

export default function* userSaga() {
    yield all([
        fork(watchSignIn),
        // fork(watchSignUp),
    ]);
}