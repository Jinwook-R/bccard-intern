import * as React from 'react';
import {Button, Form, Input} from 'antd';
import Link from "next/link";
import useInput from "../hooks/useInput";
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {signInRequestAction} from '../reducers/user';

const StyledLoginForm = styled.div`
  width: 500px;
  margin: 50px auto;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font: 20px bold;
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
            <p style={{fontSize:'50px', fontStyle:'bold', textAlign:'center'}}>BC로(路)</p>
            <Form onFinish={onSubmitForm}>
                <div>
                    <StyledLabel htmlFor="user-id">아이디</StyledLabel>
                    <br/>
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <StyledLabel htmlFor="user-password">비밀번호</StyledLabel>
                    <br/>
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
                </div>
                <div>
                    <StyledButton type="primary" htmlType="submit" loading={false} style={{width:'maxWidth', margin:'5px 0', marginRight:'10px'}}>로그인</StyledButton>
                </div>
                <div>
                    <Link href="/signup"><a><StyledButton>회원가입</StyledButton></a></Link>
                </div>
            </Form>
        </StyledLoginForm>
    );
};

export default LoginForm;