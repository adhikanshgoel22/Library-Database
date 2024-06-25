import React, { useState } from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import Navbar from "../Home/Navbar";


const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        try {
            const response = await fetch("http://localhost:8000/api/allbooks");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            const results = json.filter((user) => {
                return user && user.title && user.title.toLowerCase().includes(value.toLowerCase());
            });
            setResults(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        
        <div>
            
            <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to Search ....."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
        </div>
    );
};

export default SearchBar;
