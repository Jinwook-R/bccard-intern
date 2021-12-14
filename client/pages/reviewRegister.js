import React, {
    useState,
} from "react";
import {withRouter} from "next/router";
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReviewFileRegisterRequestAction} from "../reducers/review";
import styled from "styled-components";
import {Button, Upload} from "antd";
import {Input} from 'antd';
import { Rate } from 'antd';
import ImgCrop from 'antd-img-crop';
import {Typography} from "antd";

const {Text} = Typography;
const {TextArea} = Input;

const StyledReviewRegister = styled.div`
  margin: 20px auto;
`;

const StyledTextArea = styled(TextArea)`
  height: 200px;
  margin-bottom: 10px;
  
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 5px auto;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font: 20px bold;
`;

const ReviewRegister = ({ router: { query } }) => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const [starValue, setStarValue] = useState(1);
    const [textValue, setTextValue] = useState('');

    const [fileList, setFileList] = useState([]);

    const user_id = useSelector(state => state.user?.me?.id);
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
        const data = {
            starpoint: starValue,
            content: textValue,
            userId: user_id,
            restaurantId,
        };

        fileList.forEach(file => formData.append('files', file));
        for(let key in selectedFiles) {
            formData.append(key, selectedFiles[key]);
        }

        const data2 = {
            file: formData,
        };
        dispatch(ReviewFileRegisterRequestAction(data2));
    };

    const uploadImage = async ({ fileList: newFileList }) => {
        setFileList(newFileList);
    }

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <AppLayout>
            <StyledReviewRegister>
                <p style={{textAlign:'center'}}>
                    <Text strong style={{font:'30px bold'}}>리뷰 등록</Text>
                </p>
                <form id="review">
                    <span>별점<Rate onChange={handleStarChange} value={starValue}/></span>
                    <StyledTextArea showCount maxLength={5000} onChange={onTextChange} />
                    <div className="App" style={{ marginTop: "10px" }}>
                        <ImgCrop rotate>
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={uploadImage}
                                onPreview={onPreview}>
                                {fileList.length < 5 && '+ Upload'}
                            </Upload>
                        </ImgCrop>
                        <StyledButton type="button" onClick={onClickHandler}>저장하기</StyledButton>
                    </div>
                </form>
            </StyledReviewRegister>
        </AppLayout>
    );
};

export default withRouter(ReviewRegister);

