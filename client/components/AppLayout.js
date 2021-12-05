import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Menu} from "antd";
import Link from "next/link";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch} from "react-redux";

const AppLayout = ({children}) =>{
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear();
        dispatch(SignOutRequestAction());
        location.href = '/'
    }

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><h1>을지로</h1></Link>
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
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;