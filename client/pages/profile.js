import React from 'react';
import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";
import {Descriptions} from "antd";
import styled from "styled-components";

const StyledProfile = styled.div`
  width: 500px;
  margin: 10px auto;
`;

const Profile = () => {
    const user = useSelector(state => state.user?.me);
    return(
        <AppLayout>
            <StyledProfile>
                <Descriptions span={1} title="사용자 정보" bordered>
                    <Descriptions.Item label="아이디" span={3}>{user?.id}</Descriptions.Item>
                    <Descriptions.Item label="이름" span={3}>{user?.username}</Descriptions.Item>
                    <Descriptions.Item label="부서" span={3}>{user?.department}</Descriptions.Item>
                    <Descriptions.Item label="직책" span={3}>{user?.rank_type}</Descriptions.Item>
                    <Descriptions.Item label="회원구분" span={3}>{user?.type}</Descriptions.Item>
                </Descriptions>
                <div>내가 쓴 리뷰 보기</div>
            </StyledProfile>
        </AppLayout>
    );
}

export default Profile;