import React, {useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {Descriptions} from "antd";
import styled from "styled-components";
import {MyReivewListRequestAction} from "../reducers/review";

const StyledProfile = styled.div`
  width: 500px;
  margin: 10px auto;
  padding: 0 10px;
`;

const Profile = () => {
    const {me} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log("dispatch MyReviewListRequestAction");
        // dispatch(MyReivewListRequestAction(user?.id));
    }, []);

    console.log(me);

    return(
        <AppLayout>
            <StyledProfile>
                <Descriptions span={1} title="사용자 정보" bordered>
                    <Descriptions.Item label="아이디" span={3}>{me?.id}</Descriptions.Item>
                    <Descriptions.Item label="이름" span={3}>{me?.username}</Descriptions.Item>
                    <Descriptions.Item label="부서" span={3}>{me?.department}</Descriptions.Item>
                    <Descriptions.Item label="직책" span={3}>{me?.rankType}</Descriptions.Item>
                    <Descriptions.Item label="회원구분" span={3}>{me?.userType}</Descriptions.Item>
                </Descriptions>
                <div>내가 쓴 리뷰 보기</div>
            </StyledProfile>
        </AppLayout>
    );
}

export default Profile;