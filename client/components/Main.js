import * as React from 'react';
import {Category} from "./Category";
import {SearchInput} from "./SearchInput";
import {Col, Menu, Row} from "antd";
import Link from "next/link";
import {useEffect} from "react";
import {SignOutRequestAction, signInRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";

const Main = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        dispatch(SignOutRequestAction());
        location.href = '/'
    }

    useEffect(()=>{

        dispatch(signInRequestAction({

        }));
    },[]);

    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><h1>BC로</h1></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/review"><a>리뷰 등록</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>마이페이지</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/reservation"><a>점심약속 관리</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <a onClick={handleLogout}>로그아웃</a>
                </Menu.Item>

            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}></Col>
                <Col xs={24} md={12}>
                    <SearchInput/>
                    <Category title={"오늘의 추천 맛집"}/>
                    <Category title={"팀장님 추천 맛집"}/>
                    <Category title={"시간대별 추천 맛집"}/>
                </Col>
                <Col xs={24} md={6}></Col>
            </Row>

        </>
    );
};

export default Main;