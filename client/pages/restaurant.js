import * as React from 'react';
import AppLayout from "../components/AppLayout";
import { withRouter } from 'next/router';
import Map from "../components/Map";
import {useSelector} from "react-redux";
import {Badge, Button, Card, Col, Descriptions, Image, List, Row} from 'antd';
import {HighlightOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Link from "next/link";
import styled from "styled-components";

function ImageDemo() {
    return (
        <Image
            width={300}
            src="https://ww.namu.la/s/b8b95135824383b8283317026d2b7c431dae2304229f139a556bc63d192f23b998a8fd9350b9b364947349180555dba0122027e215c88686d3c54328573990c6ffcc4b959984ecf8fc1ec6d0ecb8f551"
        />
    );
}

const data = [
    {
        title: '맛있어요!',
        content: '국물이 정말 좋았어요'
    },
    {
        title: '그저그러네요..',
        content: '식당 분위기가 제 취향은 아니었네요'
    },
    {
        title: '정말 맛있어요!!',
        content: '면발이 정말 맜있어요!!'
    },
    {
        title: '또 가고 싶네요',
        content: '집이랑 가깝고 맛있어요'
    },
];

const data2 = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const StyledImageList = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  font-size: 0;
`;

const StyledTitle = styled.span`
  @media screen and (min-width: 501px) {
     {font-size: 30px;}
  }

  @media screen and (max-width: 500px) {
     {font-size: 20px;}
  }
  font-family: 'Readex Pro', sans-serif;
  font-weight: normal;
`;

const StyledImage = styled.div`
  padding: 0 5px;
`;

const Restaurant = ({ router: { query } }) => {

    const {restaurantList} = useSelector(state => state.restaurant);
    const {address, lat, lng, name, tel, type, price, parking, RestaurantMenus} = restaurantList.filter((e)=> e.id == query.id)[0];

    return (
        <AppLayout>
            <Row gutter={[10, 10]} style={{width: "100%"}}>
            <Col xs={2}></Col>
            <Col xs={20} md={20}>
            <StyledImageList>
                <StyledImage><ImageDemo/></StyledImage>
                <StyledImage><ImageDemo/></StyledImage>
                <StyledImage><ImageDemo/></StyledImage>
                <StyledImage><ImageDemo/></StyledImage>
            </StyledImageList>
            <div>
            <StyledTitle>{name}</StyledTitle>
            <Descriptions style={{display:'block'}} size="big" bordered>
                <Descriptions.Item label="주소" span={2}>{address}</Descriptions.Item>
                <Descriptions.Item label="전화번호" span={3}>{tel}</Descriptions.Item>
                <Descriptions.Item label="음식 종류" span={3}>{type}</Descriptions.Item>
                <Descriptions.Item label="가격대" span={3}>{price}원</Descriptions.Item>
                <Descriptions.Item label="주차" span={3}>
                    {parking}
                </Descriptions.Item>
                <Descriptions.Item label="영업시간" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="메뉴">
                    {RestaurantMenus?.map((e) => {
                        return (<>
                            <span>{e.menuName}</span>
                            <br/>
                        </>)
                    }) }
                </Descriptions.Item>
            </Descriptions>
            <Link
                href={{
                    pathname: '/reviewRegister',
                    query: {restaurant_id: query.id},
                }}
            >
                <Button style={{width:"100%", margin:"10px 0", height:"50px", backgroundColor:'whitesmoke', borderRadius:"5px"}}>
                    <span style={{fontSize:"20px", fontWeight:"bold"}}>리뷰 작성하기</span>
                </Button>
            </Link>
            <Map lat={lat} lng={lng} name={name}></Map>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
            </div>

            </Col>
            <Col xs={2}></Col>
            </Row>
        </AppLayout>
    );
};

export default withRouter(Restaurant);