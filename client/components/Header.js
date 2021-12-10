import * as React from 'react';
import Link from "next/link";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Button} from "antd";

const StyledHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  width: 100%;
  z-index: 2;
  padding: 7px 0;
  border-bottom: 1px solid rgb(237, 237, 237);
  background-color: white;
  div {
    box-sizing: border-box;
  }
`;

const StyledButton = styled(Button)`
  appearance: auto;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  margin: 0em;
  padding: 3px 6px;
  font-size: 20px;
  border: none;
  color: #656262;
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
                <Link href="/profile"><StyledButton>마이페이지</StyledButton></Link>
            </div>
            <div>
                <Link href="/reservation"><StyledButton>약속 관리</StyledButton></Link>
            </div>
            <div>
                <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
            </div>
        </StyledHeader>
    );
};

export default Header;

