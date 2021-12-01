import React from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import {useSelector} from "react-redux";

const Home = () => {
    const token = useSelector(state => state.user.me?.token);

    return (
        <AppLayout>
                {token ? <Main/> : <LoginForm/>}
        </AppLayout>
    );
}

export default Home;