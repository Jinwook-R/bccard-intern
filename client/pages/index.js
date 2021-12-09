import React from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import {useSelector} from "react-redux";
import styled from 'styled-components';


const StyledHome = styled.div`
    
    background-color: whitesmoke;

`;

const Home = () => {

    let token = useSelector(state => state.user.me?.token);
    if(!token){
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('ACCESS_TOKEN');
        }
    }

    return (
        <StyledHome>
            <AppLayout>
                    {token ? <Main/> : <LoginForm/>}
            </AppLayout>
        </StyledHome>
    );
}

export default Home;