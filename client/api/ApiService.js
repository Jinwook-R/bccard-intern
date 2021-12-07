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
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    if(data){
        options.body= JSON.stringify(data);
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

export function signin(user) {
    return call("/auth/signin", "POST", user)
        .then((response) => {
            console.log("response: ", response);
            if(response.token){
                localStorage.setItem("ACCESS_TOKEN", response.token);
            }
            return response;
        });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
}

export function signup() {

}

export function imageCall(param) {

    if(!param) return null;

    let headers = new Headers({
        "Content-Type":"application/json",
    });

    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    if(accessToken && accessToken !== null){
        headers.append("Authorization", "Bearer "+ accessToken);
    }

    const options = {
        headers: headers,
        url: ``,
        method: "GET",
    };

    return fetch(options.url, options).then((res) =>
        {
            console.log(res)
            if(!res.ok) {
                return Promise.reject(res.headers);
            }
            return res;
        }
    ).then(imageBlob => {
            // Then create a local URL for that image and print it
            // const imageObjectURL = URL.createObjectURL(imageBlob);
            console.log(imageBlob);
            return imageBlob;
    })


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