import * as React from 'react';
import { signOutRequestAction } from "../reducers/user";
import { useDispatch } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import { Menu } from "antd";

const StyledHeader = styled.div`
    .ant-menu-submenu-title {
        padding-left : 0px;
    }
    ul {
      border-right: none;
    }
`;

const Header = () => {
    const dispatch = useDispatch();
    const handleSignOut = () => {
        localStorage.clear();
        dispatch(signOutRequestAction());
    }

    return (
        <>
            <StyledHeader style={{width:"100%", backgroundColor:"white"}}>
                <p style={{textAlign:'center', fontWeight:'bold', fontSize:'25px', paddingTop:'10px'}}>BC로(路)</p>
                    <Menu mode="inline">
                        <Menu.SubMenu key="menu" title="메뉴" style={{color:'black', border:"none"}}>
                            <Menu.ItemGroup>
                                <Menu.Item key="setting1"><Link href="/profile">내 정보</Link></Menu.Item>
                                <Menu.Item key="setting2"><Link href="/reservation">약속 관리</Link></Menu.Item>
                                <Menu.Item key="setting3" onClick={handleSignOut}>로그아웃</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                    </Menu>
            </StyledHeader>
        </>
    );
};

export default Header;

