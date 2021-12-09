import {API_BASE_URL} from './config.js';
function call(api, method, data){
    let headers = new Headers({
        "Content-Type":"application/json",
    });
    
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer "+ accessToken);
    }

    const options = {
        headers,
        url: API_BASE_URL + api,
        method,
    };

    if(data){
        options.body= JSON.stringify(data);
    }

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            console.log(json,'json');
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        }));
}

export function signin(user) {
    return call("/auth/signin", "POST", user)
        .then((response) => {
            if(response.token){
                localStorage.setItem("ACCESS_TOKEN", response.token);
            }
            return response;
        });
}

export function signup(user) {
    return call("/auth/signup", "POST", user)
        .then((response) => {
            if(response.status === 200) {
                alert("회원가입이 완료되었습니다:)");
                location.href = '/'
            } else {
                alert("회원가입에 실패하였습니다..");
            }
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
}

export function reviewinsert({review}) {
    return call("/review/insert", "POST", review)
        .then((response) => {
            console.log(response);
            alert("리뷰등록이 완료되었습니다:)");
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