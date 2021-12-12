import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";
import styled from "styled-components";
import Header from "./Header";
import {loadUserRequestAction} from "../reducers/user";

const StyledNavBar = styled.ul`
  
  display: flex;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
  margin-bottom: 0;
  li {
    margin: 0em 0.75em;
    font-size: 20px;
    color: #9b9898;
  }
  
  span {
    cursor: pointer;
  }
  
  @media screen and (min-width: 501px) {
    span {font-size: 20px;}
  }

  @media screen and (max-width: 500px) {
    span {font-size: 15px;}
  }
  font-family: 'Readex Pro', sans-serif;
`;

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(restaurantListRequestAction());
    },[]);

    return (
        <Row>
            <Col xs={0} md={4}></Col>
            <Col xs={24} md={16}>
                <div>
                    <SearchInput/>
                    <StyledNavBar>
                        <li><span>한식</span></li>
                        <li><span>양식</span></li>
                        <li><span>중식</span></li>
                    </StyledNavBar>
                    <Category title={"오늘의 추천 맛집"}/>
                    <Category title={"양식"} type={"양식"}/>
                    <Category title={"한식"} type={"한식"}/>
                    <Category title={"디저트"} type={"디저트"}/>
                </div>
            </Col>
            <Col xs={0} md={4}></Col>
        </Row>
    );
};

export default Main;