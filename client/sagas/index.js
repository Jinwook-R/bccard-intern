import {all, fork} from 'redux-saga/effects';
import userSaga from './user';
import restaurantSaga from './restaurant';
import reviewSaga from "./review";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

export default function* rootSaga(){
    yield all([
        fork(userSaga),
        fork(restaurantSaga),
        fork(reviewSaga),
    ])
}