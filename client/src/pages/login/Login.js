import React, {useState, useEffect} from 'react';
import {signin} from '../../api/ApiService';

const Login = () => {

    const vLoginProps = {};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        //경로 바꾸기 기능 추가
        signin({email,password});
    }

    return (
        <>
            <p>로그인 페이지</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email}/>
                <input type="text" value={password}/>
                <button type="submit">로그인</button>
            </form>
        </>
    );
};

export default Login;