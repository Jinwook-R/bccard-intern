import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Menu} from "antd";
import Link from "next/link";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch, useSelector} from "react-redux";

const AppLayout = ({children}) =>{

    let token = useSelector(state => state.user.me?.token);
    if(!token){
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('ACCESS_TOKEN');
        }
    }

    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear();
        dispatch(SignOutRequestAction());
        location.href = '/'
    }

    return (
        <div>{
            token &&
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><h1>BC로</h1></Link>
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
            }
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;