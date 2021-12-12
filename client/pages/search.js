import * as React from 'react';
import {useSelector} from "react-redux";
import {withRouter} from "next/router";
import {Card, Col, Row} from "antd";
import Link from "next/link";
import Meta from "antd/es/card/Meta";
import AppLayout from "../components/AppLayout";
import SearchInput from "../components/SearchInput";
import {API_BASE_URL} from "../api/config";
import styled from "styled-components";
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
const StyledImgWrapper = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  height: 250px;
  width: 200px;
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
`;

const Search = ({ router: {query} }) => {

    const { name } = query;
    const restaurantList = useSelector(state => state.restaurant.restaurantList).filter((restaurant) => restaurant.name.includes(name));


    console.log(restaurantList);
    return (
        <AppLayout>
                <SearchInput/>
            <div style={{fontSize:"25px", fontWeight:'bold'}}>'{name}'(이)가 포함된 음식점 결과 목록</div>
            <Row gutter={[10, 10]} style={{width: "100%", marginTop:"20px"}}>
                <Col md={6} lg={8} />
        {restaurantList.map((e) => {
            if(e.name){
                return (
                    <Col xs={12} md={8}>
                        <div style={{cursor: "pointer"}}>
                            <StyledImgWrapper className=".img-wrapper">
                                <Link href={{
                                    pathname: '/restaurant',
                                    query: {id: e.id},
                                }}>
                                    <img
                                        src={API_BASE_URL + `/restaurant/img?fileNo=${e.RestaurantFiles[0]?.fileNo}`}
                                    />
                                </Link>
                            </StyledImgWrapper>
                            <>
                                <StyledMeta title={e.name}/>
                                <StyledMeta title={e.tel}/>
                                <StyledMeta title={e.address}/>
                            </>
                        </div>
                    </Col>
                    )
            }
            }
        )}
            <Col md={6} lg={8} />
            </Row>
        </AppLayout>
        );
};

export default withRouter(Search);

