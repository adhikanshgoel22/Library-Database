import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./User.css";
import Navbar from "../Home/Navbar";

const User = () => {
    const [results, setResults] = useState([]);

    return (
        <div className="user-container">
            <Navbar ></Navbar>
            <SearchBar setResults={setResults} />
            <div className="results-container">
                {results.length > 0 ? (
                    results.map((results, index) => (
                        <div key={index} className="results-item">
                            <h3>{results.title}</h3>
                            <p>{results.author}</p>
                            <p>{results.publisher}</p>
                            <p>{results.genre}</p>
                            <p>{results.isbn}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default User;
