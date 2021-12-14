import * as React from 'react';
import {Button, Input} from 'antd';
import Link from "next/link";
import useInput from "../hooks/useInput";
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {signInRequestAction} from '../reducers/user';

const StyledLoginForm = styled.div`
  width: 501px;
  margin: 50px auto;
  padding: 0 5px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font: 20px bold;
`;

const StyledP = styled.p`
  color: grey;
  font-family: 'Readex Pro', sans-serif;
  font-weight: bold;
  @media screen and (min-width: 501px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }

`;

const LoginForm = () => {
    const [id, onChangeId] = useInput('asdf@naver.com');
    const [password, onChangePassword] = useInput('1234');
    const dispatch = useDispatch();

    const onSubmitForm = useCallback( (e) => {
        dispatch(signInRequestAction({
            id,
            password,
        }));
    },[id, password]);

    return (
        <StyledLoginForm>
            <StyledP style={{fontSize:'50px', fontStyle:'bold', textAlign:'center'}}>BC로(路)</StyledP>
            <div>
                <div>
                    <StyledLabel htmlFor="user-id">아이디</StyledLabel>
                    <br/>
                    <Input style={{height:"40px"}} name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div style={{marginTop:"8px"}}>
                    <StyledLabel htmlFor="user-password">비밀번호</StyledLabel>
                    <br/>
                    <Input style={{height:"40px"}} name="user-password" type="password" value={password} onChange={onChangePassword} required/>
                </div>
                <div style={{marginTop:"5px"}}>
                    <StyledButton type="primary" onClick={onSubmitForm} loading={false} style={{width:'maxWidth', margin:'5px 0', marginRight:'10px'}}>로그인</StyledButton>
                    <Link href="/signup"><a><StyledButton>회원가입</StyledButton></a></Link>
                </div>
            </div>
        </StyledLoginForm>
    );
};

export default LoginForm;