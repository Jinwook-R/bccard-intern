import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import {useSelector} from "react-redux";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  margin: 0 20px;
`;

const AppLayout = ({children}) => {
    const {isSignedIn} = useSelector(state => state.user);

    return (
        <>
        <StyledAppLayout>
          {isSignedIn &&<Header/>}
          {children}
        </StyledAppLayout>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;