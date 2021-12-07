import React, {useState} from 'react';
import AppLayout from "../components/AppLayout";
import {Button} from "antd";
import {withRouter} from "next/router";
import {useSelector} from "react-redux";
import { Input } from 'antd';
import { Rate } from 'antd';

const { TextArea } = Input;

const ReviewRegister = ({ router: { query } }) => {

    //query.id로 음식점 정보 가져오기
    const restaurant = useSelector(state => state.restaurant.restaurantList).filter((e)=> e.id === query.id)[0];
    const [value, setValue] = useState(1);

    const handleReviewRegister = (e) => {
        console.log(e);
    }

    const onTextChange = (e) => {
        console.log(e.target.value);
    }

    const handleStarChange = (value) => {
        setValue(value);
    }


    return(
        <AppLayout>
            <>
                <p>{restaurant.name}</p>
                <span>
                    별점
                <Rate onChange={handleStarChange} value={value} />
                </span>
                <TextArea showCount maxLength={10000} style={{ height: 120 }} onChange={onTextChange} />
                <input type="file" name="file" multiple/>
                <Button onClick={handleReviewRegister}>리뷰 등록 완료</Button>
            </>
        </AppLayout>
    );
}

export default withRouter(ReviewRegister);
