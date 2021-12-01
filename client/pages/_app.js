import React, {useState} from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from "../store/configureStore";

//_app.js는 페이지들의 공통인 부분
const App = ({Component}) => {

    return (
        <>
            <Head>
                <title>BC로</title>
            </Head>
            <Component/>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);
