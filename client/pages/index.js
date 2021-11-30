import React from "react";
import AppLayout from "../components/AppLayout";
import {useState} from "react";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AppLayout>
                {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </AppLayout>
    );
}

export default Home;