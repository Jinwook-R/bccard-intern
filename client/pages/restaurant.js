import * as React from 'react';
import AppLayout from "../components/AppLayout";
import { withRouter } from 'next/router';
import Map from "../components/Map";
import {useSelector} from "react-redux";

const Restaurant = ({ router: { query } }) => {


    return (
        <AppLayout>
            <div>음식점 상세조회</div>
            <Map></Map>
        </AppLayout>
    );
};

export default withRouter(Restaurant);