import React, { useState } from 'react';
import {AutoComplete, Button, Col, Row} from 'antd';
import {useSelector} from "react-redux";
import {SearchOutlined} from "@ant-design/icons";
import Link from "next/link";
const { Option } = AutoComplete;

const SearchInput = () => {
    const [searchName, setSearchName] = useState("");
    const [result, setResult] = useState([]);
    const restaurantList = useSelector(state => state.restaurant.restaurantList);

    const handleSearch = (value) => {
        const res = restaurantList
            .filter((restaurant) => restaurant.name.includes(value+""))
            .map((restaurant)=> restaurant.name);
        setResult(res);
        setSearchName(value);
    };

    const handleClickSearchButton = (e) => {
        console.log(searchName);
    };

    return (
        <div style={{display:"flex"}}>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                    width: "100%"
                }}
                onSearch={handleSearch}
            >
                {result.map((name, idx) => (
                    <Option key={idx} value={name}>
                        {name}
                    </Option>
                ))}
            </AutoComplete>
            <Link href={{
                pathname: '/restaurant',
                query: { id:'123'},
            }}>
                <Button style={{"marginLeft":"5px"}} size={"medium"} onClick={handleClickSearchButton}><SearchOutlined/></Button>
            </Link>
        </div>
    );
};

export default SearchInput;

