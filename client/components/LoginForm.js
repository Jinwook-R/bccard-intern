import * as React from 'react';
import {Button, Form, Input} from 'antd';
import Link from "next/link";
import useInput from "../hooks/useInput";
import styled from 'styled-components';
import {signin} from "../api/ApiService";


const StyledLoginForm = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const LoginForm = () => {
    const [id, onChangeId] = useInput('asdf@naver.com');
    const [password, onChangePassword] = useInput('1234');

    const onSubmitForm = () => {
        signin({
            email: id,
            password
        })
    }

    return (
        <StyledLoginForm>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} onChange={onChangeId} required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
                </div>
                <div>
                    <Button type="primary" htmlType="submit" loading={false} style={{width:'maxWidth', margin:'5px 0', marginRight:'10px'}}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </div>
            </Form>
        </StyledLoginForm>
    );
};

export default LoginForm;