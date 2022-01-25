import React, {useState} from "react";
import {withRouter} from "next/router";
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReviewFileRegisterRequestAction, ReviewRegisterRequestAction} from "../reducers/review";
import styled from "styled-components";
import {Button, Form, Upload} from "antd";
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
    const [contentValue, setContentValue] = useState('');

    const user = useSelector(state => state.user?.me);
    const {restaurantId, restaurantName} = query;
    const dispatch = useDispatch();

    const onTextChange = (e) => {
        setContentValue(e.target.value);
    }

    const handleStarChange = (starValue) => {
        setStarValue(starValue);
    }

    const onClickHandler = event => {

        const formData = new FormData();

        [].forEach.call(selectedFiles, (f) => {
            // f.originFileObj.name = `${restaurantName}.png`
            console.log(f.originFileObj)
            formData.append('file', f.originFileObj);
        });

        formData.append('data', {
            'userId': user.id,
            'restaurantName' : restaurantName
        });

        dispatch(ReviewFileRegisterRequestAction(formData));
        dispatch(ReviewRegisterRequestAction(
        {
                'userId' : user.id,
                'content' : contentValue,
                'star' : starValue
            }
        ));
    };

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

    const handleFileChange = ({ fileList: newFileList }) => {
        setSelectedFiles(newFileList);
    }

    return (
        <AppLayout>
            <StyledReviewRegister>
                <p style={{textAlign:'center'}}>
                    <Text strong style={{font:'30px bold'}}>리뷰 등록</Text>
                </p>
                <Form id="review" encType="multipart/form-data" onFinish={onClickHandler}>
                    <span>별점<Rate onChange={handleStarChange} value={starValue}/></span>
                    <StyledTextArea showCount maxLength={5000} onChange={onTextChange} />
                    <div className="App" style={{ marginTop: "10px" }}>
                        <ImgCrop rotate>
                            <Upload
                                type="file"
                                multiple
                                listType="picture-card"
                                fileList={selectedFiles}
                                onChange={handleFileChange}
                                onPreview={onPreview}
                            >
                            {selectedFiles.length < 5 && ' Upload + '}
                            </Upload>
                        </ImgCrop>
                        <StyledButton type="button" htmlType="submit">저장하기</StyledButton>
                    </div>
                </Form>
            </StyledReviewRegister>
        </AppLayout>
    );
};

export default withRouter(ReviewRegister);

