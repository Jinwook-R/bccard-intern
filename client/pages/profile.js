import React, {useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {Typography} from "antd";

const {Text} = Typography

const Profile = () => {
    const {me} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("dispatch MyReviewListRequestAction");
    }, []);

    console.log(me)

    return(
        <AppLayout>
            <div>
                <Text>사용자 정보</Text>
                    <div id='address' span={3}>
                        <Text strong>아이디</Text>
                        <p>{me?.id}</p>
                    </div>
                    <div id='name' span={3}>
                        <Text strong>이름</Text>
                        <p>{me?.name}</p>
                    </div>
                    <div id='id' span={3}>
                        <Text strong>아이디</Text>
                        <p>{me?.id}</p>
                    </div>
                    <div id='id' span={3}>
                        <Text strong>이름</Text>
                        <p>{me?.username}</p>
                    </div>
                    <div id='id' span={3}>
                        <Text strong>부서</Text>
                        <p>{me?.department}</p>
                    </div>
                    <div id='id' span={3}>
                        <Text strong>직책</Text>
                        <p>{me?.rankType}</p>
                    </div>
                    <div id='id' span={3}>
                        <Text strong>회원구분</Text>
                        <p>{me?.userType}</p>
                    </div>
                <div>내가 쓴 리뷰 보기</div>
            </div>
        </AppLayout>
    );
}

export default Profile;