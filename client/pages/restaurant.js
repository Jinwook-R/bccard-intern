import * as React from 'react';
import AppLayout from "../components/AppLayout";
import { withRouter } from 'next/router';
import Map from "../components/Map";
import {useSelector} from "react-redux";
import {Badge, Button, Col, Image, List, Row, Space, Typography} from 'antd';
import Avatar from "antd/es/avatar/avatar";
import Link from "next/link";
import styled from "styled-components";

const {Text} = Typography

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

const StyledTitle = styled.p`
  @media screen and (min-width: 501px) {
    font-size: 35px;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  
  margin-top: 10px;
  font-family: 'Readex Pro', sans-serif;
  font-weight: normal;
`;

const StyledImage = styled.div`
  padding: 0 5px;
`;

const StyledDescription = styled.div`
  .ant-descriptions-view .ant-descriptions-row .ant-descriptions-item-label {
    @media screen and (min-width: 501px) {
      span {font-size: 20px;}
    }

    @media screen and (max-width: 320px) {
      span {
        font-size: 8px;
        font-weight: bold;
      }
    }
    
  }
  p {
    padding-left: 2px;
  }
`;

const Restaurant = ({ router: { query } }) => {

    const {restaurantList} = useSelector(state => state.restaurant);
    const {address, lat, lng, name, tel, type, price, parking, RestaurantMenus} = restaurantList.filter((e)=> e.id == query.id)[0];

    return (
        <AppLayout>
            <Row gutter={[10, 10]} style={{width: "100%"}}>
            <Col xs={1}></Col>
            <Col xs={22} md={20}>
                <StyledImageList>
                    <StyledImage><ImageDemo/></StyledImage>
                    <StyledImage><ImageDemo/></StyledImage>
                    <StyledImage><ImageDemo/></StyledImage>
                    <StyledImage><ImageDemo/></StyledImage>
                </StyledImageList>
                <StyledDescription>
                    <StyledTitle>{name}</StyledTitle>
                    <Space direction="vertical">
                        <div id='address' span={3}>
                            <Text strong>주소</Text>
                            <p>{address}</p>
                        </div>
                        <div id='tel' span={3}>
                            <Text strong>전화번호</Text>
                            <p>{tel}</p>
                        </div>
                        <div id='food' span={3}>
                            <Text strong>음식 종류</Text>
                            <p>{type}</p>
                        </div>
                        <div id='price' span={3}>
                            <Text strong>가격대</Text>
                            <p>{price}원</p>
                        </div>
                        <div label="주차" span={3}>
                            <Text strong>주차</Text>
                            <p>{parking}</p>
                        </div>
                        <div span={3}>
                            <Text strong>영업시간</Text>
                            <p>Running</p>
                        </div>
                        <div>
                            <Text strong>메뉴</Text>
                            {RestaurantMenus?.map((e) => {
                                return (<div>
                                            <span>{e.menuName}</span>
                                        </div>)
                            }) }
                        </div>
                    </Space>
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
                </StyledDescription>
            </Col>
            <Col xs={1}></Col>
            </Row>
        </AppLayout>
    );
};

export default withRouter(Restaurant);