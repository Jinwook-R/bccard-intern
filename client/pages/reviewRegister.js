import React, {
    useState,
    useEffect
} from "react";
import {withRouter} from "next/router";
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReviewRegisterRequestAction} from "../reducers/review";
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

    const [selectedFiles, setSelectedFiles] = useState('');
    const [loading, setLoading] = useState(false);

    const [starValue, setStarValue] = useState(1);
    const [textValue, setTextValue] = useState('');

    const user_id = useSelector(state => state.user?.me?.id);
    const {restaurant_id} = query;
    const dispatch = useDispatch();

    const onTextChange = (e) => {
        setTextValue(e.target.value);
    }

    const handleStarChange = (starValue) => {
        setStarValue(starValue);
    }

    const onClickHandler = event => {
        const formData = new FormData();
        console.log('selectedFiles: ',selectedFiles);

        formData.append(
            "uploadImages",
            selectedFiles[0]
        );

        dispatch(ReviewRegisterRequestAction({
            starpoint: starValue,
            content: textValue,
            user_id,
            restaurant_id
        })
        )

    };

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'darwin');

        const config = {
            header: {'content-type': 'multipart/form-data'}
        }

        for(let value of data.values()) {
            console.log(value);
        }




    }

        return (
            <AppLayout>
                <StyledReviewRegister>
                    <p style={{textAlign:'center', font:'30px bold'}}>음식점 리뷰</p>
                    <span>
                    별점
                    <Rate onChange={handleStarChange} value={starValue} />
                    </span>
                    <TextArea showCount maxLength={10000} onChange={onTextChange} />
                    <div className="App" style={{ marginTop: "100px" }}>
                        <input type="file" multiple onChange={uploadImage} />
                        <button onClick={onClickHandler}>저장하기</button>
                    </div>
                </StyledReviewRegister>
            </AppLayout>
        );
};

export default withRouter(ReviewRegister);
