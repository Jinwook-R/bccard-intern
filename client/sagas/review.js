import {reviewinsert} from '../api/ApiService';
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../reducers/review';
import {REVIEW_REGISTER_SUCCESS, REVIEW_REGISTER_FAILURE} from "../reducers/review";

function reviewInsertAPI(data) {
    alert('@@');
    return reviewinsert(data);
}

function* reviewInsert({payload}) {
    console.log("reviewInsert")
    try {
        const review = payload;
        const result = yield call(reviewInsertAPI, review);
        yield put({
            type: REVIEW_REGISTER_SUCCESS,
            payload: result,
        });
    } catch (err) {
        yield put({
            type: REVIEW_REGISTER_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchReviewInsert() {
    yield takeEvery(actions.REVIEW_REGISTER_REQUEST, reviewInsert);
}

export default function* reviewSaga() {
    yield all([
        fork(watchReviewInsert),
    ]);
}