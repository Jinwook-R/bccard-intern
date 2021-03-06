import React, { useState } from 'react';
import {AutoComplete, Button} from 'antd';
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

    const handleChange = (value) => {
        setSearchName(value);
    }

    return (
        <div style={{display:"flex", marginBottom:"10px"}}>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                    width: "100%",
                }}
                onChange={handleChange}
                onSearch={handleSearch}
            >
                {result.map((name, idx) => (
                    <Option key={idx} value={name}>
                        {name}
                    </Option>
                ))}
            </AutoComplete>
            <Link href={{
                pathname: '/search',
                query: {name:searchName},
            }}>
                <Button style={{"marginLeft":"5px"}} size={"medium"}><SearchOutlined/></Button>
            </Link>
        </div>
    );
};

export default SearchInput;