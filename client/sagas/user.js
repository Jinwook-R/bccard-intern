import {signin, signup} from '../api/ApiService';
import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import * as actions from '../reducers/user';
import {SIGN_IN_FAILURE, SIGN_IN_SUCCESS, SIGN_UP_SUCCESS, SIGN_OUT_FAILURE, SIGN_OUT_SUCCESS} from "../reducers/user";

export const initialState = {
    user: null,
    signInLoading: false,
    signInSucceed: false,
    signInError: null
}

function signInAPI(data) {
    return signin(data);
}

function* signIn({payload}) {
    try {
        const {signInData} = payload;
        const result = yield call(signInAPI, signInData);
        yield put({
            type: SIGN_IN_SUCCESS,
            payload: result,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return signup(data);
}

function* signUp({payload}) {
    try {
        const {signUpData} = payload;
        const result = yield call(signUpAPI, signUpData);

        yield put({
            type: SIGN_UP_SUCCESS,
            payload: result,
        });
    } catch (err) {
        console.log(err);
    }
}

function signOutAPI() {
    // return signout();
}

function* signOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: SIGN_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchSignIn() {
    yield takeEvery(actions.SIGN_IN_REQUEST, signIn);
}

function* watchSignUp() {
    yield takeEvery(actions.SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignUp),
    ]);
}