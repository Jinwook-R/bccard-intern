import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";
import styled from "styled-components";

const StyledNavBar = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    margin: 0em 0.75em;
    font-size: 20px;
    color: #9b9898;
  }`;

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("main.js mounted!")
        dispatch(restaurantListRequestAction());
    },[]);

    return (
        <div style={{width:'950px', margin:'0 auto' }}>
            <SearchInput/>
            <StyledNavBar>
                <li><span>오늘의 추천 맛집</span></li>
                <li><span>한식</span></li>
                <li><span>양식</span></li>
                <li><span>중식</span></li>
            </StyledNavBar>
            <Category title={"오늘의 추천 맛집"}/>
            <Category title={"양식"} type={"양식"}/>
            <Category title={"한식"} type={"한식"}/>
        </div>
    );
};

export default Main;