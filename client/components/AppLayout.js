import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import {SignOutRequestAction} from "../reducers/user";
import {useDispatch, useSelector} from "react-redux";


const AppLayout = ({children}) => {

    let token = useSelector(state => state.user.me?.token);
    if(!token){
        if (typeof window !== 'undefined') {
            token = localStorage.getItem('ACCESS_TOKEN');
        }
    }



    return (
        <>{
            token && <Header/>
            }
            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;