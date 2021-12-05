import * as React from 'react';
import {Category} from "./Category";
import SearchInput from "./SearchInput";
import {Col, Menu, Row} from "antd";
import Link from "next/link";
import {useEffect} from "react";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";
import {restaurantListRequestAction} from "../reducers/restaurant";

const Main = () => {

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(restaurantListRequestAction());
    },[]);

    return (
        <>
            <Row gutter={8}>
                <Col xs={24} md={6}></Col>
                <Col xs={24} md={12}>
                    <SearchInput/>
                    <Category title={"오늘의 추천 맛집"}/>
                </Col>
                <Col xs={24} md={6}></Col>
            </Row>

        </>
    );
};

export default Main;