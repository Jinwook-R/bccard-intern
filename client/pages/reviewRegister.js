import React, {useCallback, useEffect, useState} from 'react';
import AppLayout from "../components/AppLayout";
import {Button} from "antd";
import {withRouter} from "next/router";
import { Input } from 'antd';
import { Rate } from 'antd';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {ReviewRegisterRequestAction} from "../reducers/review";
const { TextArea } = Input;

const StyledReivewRegister = styled.div`
  margin: 20px auto;
  width: 600px;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 5px auto;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  font: 20px bold;
`;

const StyledTextArea = styled(TextArea)`
    margin-bottom: 10px;
`;

const ReviewRegister = ({ router: { query } }) => {

    const [starValue, setStarValue] = useState(1);
    const [textValue, setTextValue] = useState('');

    const user_id = useSelector(state => state.user?.me?.id);
    const {restaurant_id} = query;
    const dispatch = useDispatch();

    const handleReviewRegister = () => {
        console.log('handleReviewRegister');
        console.log(textValue,'~~~~~~~~~~');
        dispatch(ReviewRegisterRequestAction({
            starpoint: starValue,
            content: textValue,
            user_id,
            restaurant_id
        }))
    };

    useEffect(()=> {
        console.log(textValue);
    },[textValue]);

    const onTextChange = (e) => {
        setTextValue(e.target.value);
    }

    const handleStarChange = (starValue) => {
        setStarValue(starValue);
    }

    return(
        <AppLayout>
            <StyledReivewRegister>
                <p style={{textAlign:'center', font:'30px bold'}}>음식점 리뷰</p>
                <span>
                    별점
                <Rate onChange={handleStarChange} value={starValue} />
                </span>
                <TextArea showCount maxLength={10000} onChange={onTextChange} />
                <input type="file" name="file" multiple/>
                <StyledButton onClick={handleReviewRegister}>리뷰 등록 완료</StyledButton>
            </StyledReivewRegister>
        </AppLayout>
    );
}

export default withRouter(ReviewRegister);
