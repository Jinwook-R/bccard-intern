import React, {useState} from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from "../store/configureStore";

import reducers from '../reducers';
import rootSaga from "../sagas";
import {Provider} from "react-redux";

//_app.js는 페이지들의 공통인 부분
const App = ({Component}) => {

    return (
        <>
            <Component/>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}


export default wrapper.withRedux(App);
