import * as React from 'react';
import {Card, Row, Col} from 'antd';
import Link from "next/link";
import {useSelector} from "react-redux";
import {API_BASE_URL} from "../api/config";
import styled from "styled-components";

const {Meta} = Card;

const StyledImgWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
  overflow: hidden;
  height: 200px;
  border-radius: 10px;
  &::before {
      content: "";
      padding-top: 100%;
      display: block;
  }
  img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
  }
  @media screen and (min-width: 501px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
  
`;

const StyledMeta = styled(Meta)`
  position: relative;
  font-size: 0.875rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 600;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
`;

export const Category = ({title, type}) => {

    let restaurantList = useSelector(state => state.restaurant.restaurantList);
    let count = 0;

    const handleCardClick = (e) => {
        console.log(restaurantList);
    };

    return (
        <>
            <h2>{title}</h2>
            {!type && <Row gutter={[10, 10]} style={{width: "100%"}}>
                {restaurantList?.map((e, idx) => {
                    if (idx < 6) {
                        return (<Col xs={12} md={8}>
                                <div style={{cursor: "pointer", display:"inline"}}>
                                    <StyledImgWrapper className=".img-wrapper">
                                        <Link href={{
                                            pathname: '/restaurant',
                                            query: {id: e.id},
                                        }}>
                                            <img src={API_BASE_URL + `/restaurant/img?fileNo=${e.RestaurantFiles[0]?.fileNo}`}  onClick={handleCardClick}/>
                                        </Link>
                                        <p><span></span></p>
                                        <p><span>{e.address}</span></p>
                                        <p><span>{e.tel}</span></p>
                                    </StyledImgWrapper>
                                </div>
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
                        return (<Col xs={12} md={12} lg={8}>
                            <div style={{cursor: "pointer", display:"inline"}}>
                                <StyledImgWrapper className=".img-wrapper">
                                    <Link href={{
                                        pathname: '/restaurant',
                                        query: {id: e.id},
                                    }}>
                                        <img src={API_BASE_URL + `/restaurant/img?fileNo=${e.RestaurantFiles[0]?.fileNo}`}  onClick={handleCardClick}/>
                                    </Link>
                                    <p><span></span></p>
                                    <p><span>{e.address}</span></p>
                                    <p><span>{e.tel}</span></p>
                                </StyledImgWrapper>
                            </div>
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