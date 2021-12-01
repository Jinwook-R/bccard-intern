import {signin} from '../api/ApiService';
import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import * as actions from '../reducers/user';
import {SIGN_IN_FAILURE, SIGN_IN_SUCCESS} from "../reducers/user";

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

        yield put({ //put -> dispatch와 동일
            type: SIGN_IN_SUCCESS,
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