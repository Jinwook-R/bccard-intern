import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";
import MultiMap from "./MultiMap";
import Header from "./Header";

const Main = () => {
    const dispatch = useDispatch();
    const {isSignedIn} = useSelector(state => state.user);
    useEffect(() => {
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