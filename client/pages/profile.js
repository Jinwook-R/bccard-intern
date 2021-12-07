import React from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";
import {Badge, Descriptions} from "antd";

const Profile = () => {
    let user = useSelector(state => state.user?.me);
    return(
        <AppLayout>
            <Descriptions span={1} title="사용자 정보" bordered>
                <Descriptions.Item label="이메일" span={3}>{user?.email}</Descriptions.Item>
                <Descriptions.Item label="이름" span={3}>{user?.username}</Descriptions.Item>
                <Descriptions.Item label="부서" span={3}>{user?.department}</Descriptions.Item>
                <Descriptions.Item label="등급" span={3}>{user?.rank}</Descriptions.Item>
                <Descriptions.Item label="나이" span={3}>
                    {user?.age}
                </Descriptions.Item>
                <Descriptions.Item label="기타 정보">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                </Descriptions.Item>
            </Descriptions>
            <div>내가 쓴 리뷰 보기</div>
        </AppLayout>
    );
}

export default Profile;