import * as React from 'react';
import {useSelector} from "react-redux";
import {withRouter} from "next/router";
import {Card, Col, Row} from "antd";
import Link from "next/link";
import Meta from "antd/es/card/Meta";

const Search = ({ router: { query } }) => {

    const { name } = query;
    const restaurantList = useSelector(state => state.restaurant.restaurantList);

    const handleCardClick = () => {

    };

    return (
        <>
            <Row gutter={[10,10]} style={{width:"100%"}}>
        {restaurantList.filter((restaurant) => restaurant.name.includes(name)).map((e) => (
            <Col xs={24} md={12} lg={8}>
                            <Link href={{
                                pathname: '/restaurant',
                                query: { id: e.id},
                            }}
                            >
                                <a>
                                    <Card
                                        hoverable
                                        cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                                    onClick={handleCardClick}
                                        />}
                                    >
                                        <Meta title={e.name} description="www.aslwdf.com" />
                                    </Card>
                                </a>
                            </Link>
                        </Col>)
                    )
                }
            </Row>
        </>
        );
};

export default withRouter(Search);

