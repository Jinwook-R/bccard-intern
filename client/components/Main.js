import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("main.js mounted!")
        dispatch(restaurantListRequestAction());
    },[]);

    return (
        <>
            <Row gutter={8}>
                <Col xs={24} md={3}></Col>
                <Col xs={24} md={18}>
                    <SearchInput/>
                    <Category title={"오늘의 추천 맛집"}/>
                    <Category title={"양식"} type={"양식"}/>
                    <Category title={"한식"} type={"한식"}/>
                </Col>
                <Col xs={24} md={3}></Col>
            </Row>

        </>
    );
};

export default Main;