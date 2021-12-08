import * as React from 'react';
import {Card, Row, Col} from 'antd';
import Link from "next/link";
import {useSelector} from "react-redux";
import {API_BASE_URL} from "../api/config";

export const Category = ({title, type}) => {
    const {Meta} = Card;

    let restaurantList = useSelector(state => state.restaurant.restaurantList);
    let count = 0;

    const handleCardClick = (e) => {

    };

    return (
        <>
            <h2>{title}</h2>
            {!type && <Row gutter={[10, 10]} style={{width: "100%"}}>
                {restaurantList?.map((e, idx) => {
                    if (idx < 6) {
                        return (<Col xs={24} md={12} lg={8}>
                            <Link href={{
                                pathname: '/restaurant',
                                query: {id: e.id},
                            }}>
                                <a>
                                    <Card
                                        hoverable
                                        cover={ e.fileInfoList[0]?.fileNo &&
                                            <img
                                                // style={{height:'300px'}}
                                                 src={API_BASE_URL + `/file/restaurant/img?fileNo=${e.fileInfoList[0]?.fileNo}`}
                                                 onClick={handleCardClick}
                                            />
                                        }>
                                        <Meta title={e.name} />
                                    </Card>
                                </a>
                            </Link>
                        </Col>);
                    } else {
                        return null;
                    }
                    })
                }
            </Row>
            }
            {type && <Row gutter={[10, 10]} style={{width: "100%"}}>
                {restaurantList?.map((e, idx) => {
                    if (count < 6 && (e.type === type)) {
                        return (<Col xs={24} md={12} lg={8}>
                            <Link href={{
                                pathname: '/restaurant',
                                query: {id: e.id},
                            }}>
                                <a>
                                    <Card
                                        hoverable
                                        cover={<img alt="example"
                                                    src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                                    onClick={handleCardClick}
                                        />}
                                    >
                                        <Meta title={e.name} description="www.aslwdf.com"/>
                                    </Card>
                                </a>
                            </Link>
                        </Col>);
                    } else {
                        return null;
                    }
                    })
                }
            </Row>
            }
        </>
    );
}