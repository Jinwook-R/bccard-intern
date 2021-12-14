import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";
import styled from "styled-components";
import MultiMap from "./MultiMap";
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
    const {isSignedIn, me} = useSelector(state => state.user);
    useEffect(() => {
        const id = localStorage.getItem('id');
        id && dispatch(loadUserRequestAction(id));
        dispatch(restaurantListRequestAction());
    },[]);

    return (
        <Row>
            {isSignedIn && <Header/>}
            <Col xs={0} md={4}></Col>
            <Col xs={24} md={16}>
                <div style={{margin:"0 5px"}}>
                    <SearchInput/>
                    <MultiMap/>
                    <Category title={"오늘의 추천 맛집"}/>
                    <Category title={"양식"} type={"양식"}/>
                    <Category title={"한식"} type={"한식"}/>
                </div>
            </Col>
            <Col xs={0} md={4}></Col>
        </Row>
    );
};

export default Main;