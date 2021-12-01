import {API_BASE_URL} from './config.js';

function call(api, method, request){
    let headers = new Headers({
        "Content-Type":"application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer "+ accessToken);
    }

    const options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(request){
        options.body= JSON.stringify(request);
    }

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}

//로그인
export function signin(user){
    return call("/auth/signin", "POST", user)
        .then((response) => {
            console.log("response: ", response);
            if(response.token){
                localStorage.setItem("ACCESS_TOKEN", response.token);
                window.location.href="/";
            }
        })
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    // window.location.href="/";
}