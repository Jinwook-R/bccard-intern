import React, {useEffect} from "react";
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import Main from "../components/Main";
import {useDispatch, useSelector} from "react-redux";
import {loadUserRequestAction} from "../reducers/user";

const Home = () => {
    const { me, isSignedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        me && isSignedIn && localStorage.setItem('id', me.id);
    },[me]);

    useEffect(() => {
        const id = localStorage.getItem('id');
        id && dispatch(loadUserRequestAction({id}));
    },[]);

    return (
            <AppLayout>
                {isSignedIn && <Main/>}
                {!isSignedIn && <LoginForm/>}
            </AppLayout>
    );
}

export default Home;