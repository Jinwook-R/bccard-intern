import React, {
    useState,
    useEffect
} from "react";
import {withRouter} from "next/router";
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReviewFileRegisterRequestAction, ReviewRegisterRequestAction} from "../reducers/review";
import styled from "styled-components";
import {Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Rate } from 'antd';

const StyledReviewRegister = styled.div`
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

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const [starValue, setStarValue] = useState(1);
    const [textValue, setTextValue] = useState('');

    const user_id = useSelector(state => state.user?.me?.id);
    console.log(user_id,'user_id')
    const {restaurant_id} = query;
    const restaurantId = restaurant_id;
    const dispatch = useDispatch();

    const onTextChange = (e) => {
        setTextValue(e.target.value);
    }

    const handleStarChange = (starValue) => {
        setStarValue(starValue);
    }

    const onClickHandler = event => {
        const formData = new FormData();

        let cnt = 0;
        for(const file of selectedFiles){
            formData.append(
                "myFile"+cnt,
                file,
                file.name
            );
            cnt++;
        }

        const data = {
            starpoint: starValue,
            content: textValue,
            userId: user_id,
            restaurantId,
        }
        const data2 = {
            file: formData,
        }

        dispatch(ReviewFileRegisterRequestAction(data2));
    };

    const uploadImage = async (e) => {
        const files = e.target.files
        setSelectedFiles([...files]);
    }

        return (
            <AppLayout>
                <StyledReviewRegister>
                    <p style={{textAlign:'center', font:'30px bold'}}>음식점 리뷰</p>
                    <form id="review">
                        <span>
                        별점
                        <Rate onChange={handleStarChange} value={starValue} />
                        </span>
                        <TextArea showCount maxLength={10000} onChange={onTextChange} />
                        <div className="App" style={{ marginTop: "100px" }}>
                            <input type="file" name="file" multiple onChange={uploadImage} />
                            <button type="button" onClick={onClickHandler}>저장하기</button>
                        </div>
                    </form>
                </StyledReviewRegister>
            </AppLayout>
        );
};

export default withRouter(ReviewRegister);
