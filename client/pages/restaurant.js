import * as React from 'react';
import AppLayout from "../components/AppLayout";
import { withRouter } from 'next/router';
import Map from "../components/Map";
import {useSelector} from "react-redux";
import {Badge, Button, Card, Descriptions, Image, List} from 'antd';
import {HighlightOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import Link from "next/link";

function ImageDemo() {
    return (
        <Image
            width={300}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    );
}
const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
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

const Restaurant = ({ router: { query } }) => {

    const restaurantList = useSelector(state => state.restaurant.restaurantList);
    const {address, lat, lng, name, tel, type} = restaurantList.filter((e)=> e.id == query.id)[0];

    return (
        <AppLayout>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card><ImageDemo/></Card>
                    </List.Item>
                )}
            />
            <Descriptions style={{display:'inline-block', width:'500px'}} size="middle" title={name} bordered>
                <Descriptions.Item label="주소" span={2}>{address}</Descriptions.Item>
                <Descriptions.Item span={1}>
                    <Link
                        href={{
                            pathname: '/reviewRegister',
                            query: {restaurant_id: query.id},
                        }}
                    >
                        <Button>
                            <HighlightOutlined />
                        </Button>
                    </Link>
                </Descriptions.Item>
                <Descriptions.Item label="전화번호" span={3}>{tel}</Descriptions.Item>
                <Descriptions.Item label="음식 종류" span={3}>{type}</Descriptions.Item>
                <Descriptions.Item label="가격대" span={3}>2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="주차" span={3}>
                    2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="영업시간" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="메뉴">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1<br />
                </Descriptions.Item>
            </Descriptions>
            <Map lat={lat} lng={lng} name={name}></Map>
            <List
                itemLayout="horizontal"
                dataSource={data2}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </AppLayout>
    );
};

export default withRouter(Restaurant);