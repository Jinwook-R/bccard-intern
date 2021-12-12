import {myreviewlist, reviewinsert, reviewfileinsert} from '../api/ApiService';
import { all, fork, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../reducers/review';
import {MY_REVIEW_LIST_SUCCESS, MY_REVIEW_LIST_FAILURE, REVIEW_FILE_REGISTER_SUCCESS, REVIEW_FILE_REGISTER_FAILURE} from "../reducers/review";

function reviewInsertAPI(data) {
    return reviewinsert(data,{});
}

function reviewFileInsertAPI(data) {
    return reviewfileinsert(data);
}

function myReviewListAPI( userId ) {
    return myreviewlist(userId)
}

function* myReviewList( {payload} ) {
    try{
        const userId = payload;
        const result = yield myReviewListAPI(userId);
        yield put({
            type: MY_REVIEW_LIST_SUCCESS,
            payload: result
        })
    }catch (err) {
        yield put({
            type: MY_REVIEW_LIST_FAILURE,
            error: err.response.data,
        });
    }
}


function* reviewFileInsert({payload}) {
    console.log('reviewFileInsert:' , payload);
    try {
        const review = payload;
        const result = yield call(reviewInsertAPI, review);
        yield put({
            type: REVIEW_FILE_REGISTER_SUCCESS,
            payload: result,
        });
    } catch (err) {
        yield put({
            type: REVIEW_FILE_REGISTER_FAILURE,
            error: err,
        });
    }
}


function* reviewInsert( {payload} ) {
    console.log('reviewInsert:' , payload);
    try {
        const file = payload;
        const result = yield call(reviewFileInsertAPI, file);
        yield put({
            type: REVIEW_FILE_REGISTER_SUCCESS,
            payload: result,
        });
    } catch (err) {
        yield put({
            type: REVIEW_FILE_REGISTER_FAILURE,
            error: err,
        });
    }
}

function* watchReviewInsert() {
    yield takeEvery(actions.REVIEW_REGISTER_REQUEST, reviewInsert);
}

function* watchReviewFileInsert() {
    yield takeEvery(actions.REVIEW_FILE_REGISTER_REQUEST, reviewFileInsert);
}

function* watchMyReviewList() {
    yield takeEvery(actions.MY_REVIEW_LIST_REQUEST, myReviewList);
}

export default function* reviewSaga() {
    yield all([
        fork(watchReviewInsert),
        fork(watchReviewFileInsert),
        fork(watchMyReviewList)
    ]);
}