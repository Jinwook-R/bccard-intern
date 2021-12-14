import React, {
    useCallback,
    useRef,
    useState,
} from "react";
import {withRouter} from "next/router";
import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReviewFileRegisterRequestAction} from "../reducers/review";
import styled from "styled-components";
import {Button, Form, Upload} from "antd";
import {Input} from 'antd';
import { Rate } from 'antd';
import ImgCrop from 'antd-img-crop';
import {Typography} from "antd";
import axios from "axios";

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

    const [selectedFiles, setSelectedFiles] = useState(null);
    const [tmpSelectedFiles, setTmpSelectedFiles] = useState(null);

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
        console.log(event)
        formData.append('file', fileList);
        console.log(formData,'!!!!!!!!!!!!!!!!');
        axios.post('http://localhost:8080/review/insertFile', formData).then(r =>{} );
        // dispatch(ReviewFileRegisterRequestAction(formData));
    };

    const onChangeImages = async ({fileList}) => {
        setFileList(fileList);
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

    const handleFileChange = (e) => {
        const formData = new FormData();

        formData.append('file',e.target.files);
        setSelectedFiles(formData);
        setTmpSelectedFiles(e.target.files);
        // axios.post('http://localhost:8080/review/insertFile',formData);
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
                        <input id="imageUpload" type="file" multiple={true} onChange={handleFileChange}/>
                        <StyledButton for="imageUpload">파일 선택하기</StyledButton>
                        <ImgCrop rotate>
                            <Upload
                                type="file"
                                multiple
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={onPreview}
                                disabled={true}
                            >
                                {fileList.length < 5 && ' '}
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

