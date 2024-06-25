import React, { useState } from "react";
import SearchBar from "../User/SearchBar";
import "../User/User.css";
import axios from "axios";
import { Link } from "react-router-dom";
import img1 from './shit.jpg'

const AdminDb = () => {
    const [results, setResults] = useState([]);

    const handleDelete = async (isbn) => {
        try {
            await axios.delete(`http://localhost:8000/api/books/${isbn}`);
            // Remove the deleted book from the results state
            setResults((prevResults) => prevResults.filter((book) => book.isbn !== isbn));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    return (
        <div className="user-container">
            <div set><Link to="/librarian">Go Back</Link></div>
            <SearchBar setResults={setResults} />
            <div className="results-container">
                {results.length > 0 ? (
                    results.map((book, index) => (
                        <div key={index} className="results-item">
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.publisher}</p>
                            <p>{book.genre}</p>
                            <p>{book.isbn}</p>
                            <button onClick={() => handleDelete(book.isbn)} className="delete-btn">Delete</button>
                            
                            
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default AdminDb;
