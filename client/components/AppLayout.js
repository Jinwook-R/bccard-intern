import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledAppLayout = styled.div`
  margin: 0 10px;
`;

const AppLayout = ({children}) => {
    return (
        <>
            <StyledAppLayout>
              {children}
            </StyledAppLayout>
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default AppLayout;