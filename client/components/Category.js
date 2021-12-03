import * as React from 'react';
import {Card,Row, Col} from 'antd';
import Link from "next/link";

export const Category = ({title}) => {
    const { Meta } = Card;

    const handleCardClick = () => {

    }

    return (
        <>
            <h2>{title}</h2>
            <Row gutter={[10,10]} style={{width:"100%"}}>
                <Col xs={24} md={12} lg={8}>
                    <Link href={{
                        pathname: '/restaurant',
                        query: { book:'123'},
                    }}
                        >
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                            onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Link href="/restaurant">
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                        onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Link href="/review">
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                        onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Link href="/restaurant">
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                        onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Link href="/restaurant">
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                        onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={8}>
                    <Link href="/restaurant">
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg"
                                        onClick={handleCardClick}
                            />}
                        >
                            <Meta title="닭강정" description="www.aslwdf.com" />
                        </Card>
                    </Link>
                </Col>
            </Row>
        </>
    );
}