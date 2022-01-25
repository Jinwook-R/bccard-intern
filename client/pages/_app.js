import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import wrapper from "../store/configureStore";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import '../style/index.css';

const App = ({Component}) => {
    const {isSignedIn} = useSelector(state => state.user);
    const router = useRouter();

    useEffect(() => {
        if(!isSignedIn) {
            router.replace('/')
        }
    },[isSignedIn]);

    return (
        <>
            <title>BC로</title>
            <Component/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"/>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);
