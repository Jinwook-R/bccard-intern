import {loadUserRequest, logInRequest, signOutRequest, signup} from '../api/ApiService';
import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import * as actions from '../reducers/user';
import {
    SIGN_IN_FAILURE,
    SIGN_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_OUT_FAILURE,
    SIGN_OUT_SUCCESS,
    LOAD_USER_SUCCESS
} from "../reducers/user";

function loadUserAPI(data) {
    return loadUserRequest(data);
}

function signInAPI(data) {
    return logInRequest(data);
}

function* loadUser({payload}) {
     try {
        const {id} = payload;
        const result = yield call(loadUserAPI, id);

        yield put({
            type: LOAD_USER_SUCCESS,
            payload: result.data,
        });
    }catch (error) {
         console.log(error);
    }
}

function* signIn({payload}) {
    try {
        const {signInData} = payload;
        const result = yield call(signInAPI, signInData);
        yield put({
            type: SIGN_IN_SUCCESS,
            payload: result.data,
        });
    } catch (err) {
        alert(err.response.data);
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
    console.log('signOutRequestAPI Called');
    return signOutRequest();
}

function* signOut() {
    console.log('signOut');
    try {
        const result = yield call(signOutAPI);
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

function* watchSignOut() {
    yield takeEvery(actions.SIGN_OUT_REQUEST, signOut);
}

function* watchLoadUser() {
    yield takeEvery(actions.LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
    yield all([
        fork(watchSignIn),
        fork(watchSignUp),
        fork(watchSignOut),
        fork(watchLoadUser),
    ]);
}