import * as React from 'react';
import Link from "next/link";
import {signOutRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: aliceblue;
  margin-bottom: 15px;
`;

const StyledLi = styled.li`
 cursor: pointer;
  list-style-type: none;
  padding: 8px 5px;
  margin: 0 4px;
  span {
    color: grey;
    @media screen and (min-width: 501px) {
        font-size: 20px;
    }

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
    font-family: 'Readex Pro', sans-serif;
  }
`;

const StyledLogo = styled.span`
  color: grey;
  font-size: large;
  font-family: 'Readex Pro', sans-serif;
  @media screen and (min-width: 501px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;


const Header = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        localStorage.clear();
        dispatch(signOutRequestAction());

    }

    return (
        <StyledNav>
            <StyledLi>
                <Link href="/"><StyledLogo>을지로 맛집</StyledLogo></Link>
            </StyledLi>
            <div>
                <ul style={{display:"flex", padding:"0px"}}>
                <StyledLi>
                    <Link href="/profile"><span color={"black"}>My Page</span></Link>
                </StyledLi>
                <StyledLi>
                    <Link href="/reservation"><span>Appointment</span></Link>
                </StyledLi>
                <StyledLi onClick={handleSignOut}>
                    <span>Logout</span>
                </StyledLi>
                </ul>
            </div>
        </StyledNav>
    );
};

export default Header;

