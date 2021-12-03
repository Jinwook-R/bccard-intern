import React from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";

const Profile = () => {
    let user = useSelector(state => state.user.me);

    console.log(user,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    return(
        <AppLayout>
            <div>{user.email}</div>
            <div>{user.username}</div>
            <div>{user.department}</div>
            <div>{user.nickname}</div>
            <div>{user.rank}</div>
            <div>{user.age}</div>
        </AppLayout>
    );
}

export default Profile;