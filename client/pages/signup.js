import React, {useCallback, useEffect, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import {signUpRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";

const ErrorMessage = styled.div`
  color:red;
`;

const StyledSignup = styled.div`
  margin: 10px auto;
  width: 500px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font: 20px bold;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled(Input)`
  height: 40px;
`;


const Signup = () => {

    const dispatch = useDispatch();

    const [id, onChangeId] = useInput('');
    const [username, onChangeUsername] = useInput('');
    const [department, onChangeDepartment] = useInput('');
    const [rankType, onChangeRankType] = useInput('');

    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    useEffect(() => {
        setPasswordError(passwordCheck !== password);
    },[passwordCheck]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    },[]);


    const onChangePasswordCheck = useCallback((e) => {

        setPasswordCheck(e.target.value);
    }, []);

    const onSubmit = useCallback(() => {

        if(password !== passwordCheck) {
            return setPasswordError(true);
        }

        if(!term) {
            return setTermError(true);
        }

        dispatch(signUpRequestAction({
            id,
            password,
            username,
            department,
            rank_type: rankType
        }));

    },[password, passwordCheck, term]);

    return (
        <StyledSignup>
            <p style={{textAlign: "center", font: "30px bold", marginTop:"50px"}}>회원가입</p>
            <Form onFinish={onSubmit}>
                <div>
                    <StyledLabel htmlFor="user-id">아이디</StyledLabel>
                    <br/>
                    <StyledInput name="user-id" value={id} required onChange={onChangeId}></StyledInput>
                </div>
                <div>
                    <StyledLabel htmlFor="username">이름</StyledLabel>
                    <br/>
                    <StyledInput name="username" value={username} required onChange={onChangeUsername}></StyledInput>
                </div>
                <div>
                    <StyledLabel htmlFor="password">비밀번호</StyledLabel>
                    <br/>
                    <StyledInput name="password" type="password" value={password} required onChange={onChangePassword}></StyledInput>
                </div>
                <div>
                    <StyledLabel htmlFor="password-check">비밀번호 체크</StyledLabel>
                    <br/>
                    <StyledInput name="password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}></StyledInput>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다..</ErrorMessage>}
                </div>
                <div>
                    <StyledLabel>부서</StyledLabel>
                    <br/>
                    <StyledInput name="department" value={department} required onChange={onChangeDepartment}></StyledInput>
                </div>
                <div>
                    <StyledLabel>직책</StyledLabel>
                    <br/>
                    <StyledInput name="rank_type" value={rankType} required onChange={onChangeRankType}></StyledInput>
                </div>
                <div>
                    <Checkbox name="term" checked={term} onChange={onChangeTerm}>개인정보 수집에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <StyledButton type="primary" htmlType="submit">가입하기</StyledButton>
                </div>
            </Form>
        </StyledSignup>
    );
}

export default Signup;