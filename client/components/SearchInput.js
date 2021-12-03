import * as React from 'react';
import Search from "antd/lib/input/Search";
import styled from "styled-components";
import {Input} from "antd";

const StyledSearchInput = styled.div`

`;

export const SearchInput = () => {

    const onSearchInput = () => {
        
    }

    return (
        <StyledSearchInput>
            <Input.Search onSearch={onSearchInput} placeholder="지역, 식당 또는 음식" enterButton style={{ height:'100px', verticalAlign: 'middle'}}/>
        </StyledSearchInput>
    );
};