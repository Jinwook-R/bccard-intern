import React, {useCallback, useState} from 'react';
import AppLayout from "../components/AppLayout";
import {Button, Checkbox, Form, Input} from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color:red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [username, onChangeUsername] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[]);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, []);

    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password);
    },[password, passwordCheck, term]);

    return (
        <AppLayout>
            <div>회원가입 페이지</div>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}></Input>
                </div>
                <div>
                    <label htmlFor="username">이름</label>
                    <br/>
                    <Input name="username" value={username} required onChange={onChangeUsername}></Input>
                </div>
                <div>
                    <label htmlFor="nickname">닉네임</label>
                    <br/>
                    <Input name="nickname" value={nickname} required onChange={onChangeNickname}></Input>
                </div>
                <div>
                    <label htmlFor="password">비밀번호</label>
                    <br/>
                    <Input name="password" type="password" value={password} required onChange={onChangePassword}></Input>
                </div>
                <div>
                    <label htmlFor="password-check">비밀번호 체크</label>
                    <br/>
                    <Input name="password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}></Input>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다..</ErrorMessage>}
                </div>
                <div>
                    <label>부서</label>
                    <br/>
                    <Input name="department" value={password} required onChange={onChangePassword}></Input>
                </div>
                <div>
                    <Checkbox name="term" checked={term} onChange={onChangeTerm}>개인정보 수집에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;