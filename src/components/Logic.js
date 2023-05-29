import React, { useState } from "react";
import Axios from "axios";
import Search from "./Search";

const Logic = () => {
    const [input, setInput] = useState("");
    const [searched, setSearched] = useState(false);
    const [result, setResult] = useState();

    function handleChange(e) {
        setInput(e.target.value);
    }

    const handleClick = async () => {
        const response = await Axios.get(`https://api.github.com/users/${input}`);
        console.log(response.data);
        setResult(response.data);
        setSearched(true);
        setInput("");
    }

    return searched ? (
        <>
            <Search handleChange={handleChange} handleClick={handleClick} input={input} />
            <User result={result} />
        </>
    ) : (
        <Search handleChange={handleChange} handleClick={handleClick} input={input} />
    );
};

export default Logic;