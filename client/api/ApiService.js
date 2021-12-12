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
    }else {
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

export function loadUserRequest(user){
    const api = "/auth";
    console.log('loadUserReqeust', user);
    return axios.post(api, user);
}

export function logInRequest(user) {
    const api = `/auth/login`;
    return axios.post(api, user);
}

export function signOutRequest() {
    console.log('signOutRequest');
    return axios.post('/auth/logout');
}

export function myreviewlist(userId) {
    console.log('myreviewlist API Called');
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
            console.log(response.status)
            if(response.status === 200) {
                alert("회원가입이 완료되었습니다:)");

            } else {
                alert("회원가입에 실패하였습니다..");
            }
        });
}



export function reviewinsert({review}) {
    return call("/review/insert", "POST", review)
        .then((response) => {
            console.log(response);
            alert("리뷰등록이 완료되었습니다:)");
            location.href = '/';
        });
}

export function reviewfileinsert({file}){
    const data = file;
    console.log(data)
    return call("/review/insertFile", "POST", data, 'reviewInsertFile')
        .then((response) => {
            console.log(response);
            location.href = '/';
        });
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

