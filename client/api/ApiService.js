import {API_BASE_URL} from './config.js';
import axios from "axios";
function call(api, method, data, config){
    let headers;

    if(config === 'reviewInsertFile'){
        headers = new Headers({});
    }else{
        headers = new Headers({
             "Content-Type":"application/json",
         });
    }

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer "+ accessToken);
    }

    const options = {
        headers,
        url: API_BASE_URL + api,
        method,
    };

    if(data && config !== 'reviewInsertFile'){
        options.body= JSON.stringify(data);
    } else {
        options.body = data;
    }

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if(response.status !== 200){
                return Promise.reject(json);
            }
            return json;
        }));
}

export function loadUserRequest(data) {
    const api = "/auth";
    console.log('loadUserReqeust', data);
    return axios.post(api, data);
}

export function logInRequest(user) {
    const api = `/auth/login`;
    return axios.post(api, user);
}

export function signOutRequest() {
    return axios.post('/auth/logout');
}

export function myreviewlist(userId) {
    return call("/review/userReview", "GET", userId)
        .then((response) => {
            if(response) {
                console.log("response: ", response);
            }
            return response;
        });
}

export function signup(user) {
    return call("/auth/signup", "POST", user)
        .then((response) => {
            // console.log(response.status);
            if(response.status === 200) {
                alert("회원가입이 완료되었습니다:)");
            } else {
                alert("회원가입에 실패하였습니다..");
            }
        });
}

export function reviewInsertRequest({review}) {
    return axios.post("/review/insert", review);
}

export function reviewFileInsertRequest(file){
    // console.log('reviewFileInsertRequest: ', file);

    // for(const pair of file.entries()) {
    //     console.log(pair[0]+ ', '+ pair[1]);
    // }
    return axios.post("/review/insertFile" ,file);
}

export function restaurantlist() {
    return call("/restaurant/list", "GET")
        .then((response) => {
            if(response) {
                console.log("response: ", response);
            }
            return response;
        });
}

