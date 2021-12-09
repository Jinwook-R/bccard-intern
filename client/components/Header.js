import * as React from 'react';
import {Menu} from "antd";
import Link from "next/link";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        dispatch(SignOutRequestAction());
        location.href = '/';
    }

    return (
        <StyledHeader>
            <div>
                <Link href="/profile"><a>마이페이지</a></Link>
            </div>
            <div>
                <Link href="/reservation"><a>점심약속 관리</a></Link>
            </div>
            <div>
                <a onClick={handleLogout}>로그아웃</a>
            </div>
        </StyledHeader>
    );
};

export default Header;

