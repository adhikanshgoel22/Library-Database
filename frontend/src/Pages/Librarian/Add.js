import React, { useState } from "react";
import './Librarian.css';
import axios from "axios";
import { Link } from "react-router-dom";
const AddBook = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        genre: "",
        isbn: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/add", formData);
            setSuccessMessage("Entry successful");
            setErrorMessage("");
            setFormData({
                title: "",
                author: "",
                publisher: "",
                genre: "",
                isbn: "",
                // image:""
            });
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        } catch (error) {
            console.log(error);
            setErrorMessage('Please check the title and isbn');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="add-container">
            <div><Link to="/librarian">Go back</Link></div>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-title">Log new Books</div>
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="first-row">
                <div >
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input1"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        name="author"
                        className="input1"
                        value={formData.author}
                        onChange={handleChange}
                    />
                </div>
                </div>
                <div className="second-row">
                
                <div>
                    <label>Publisher</label>
                    <input
                        type="text"
                        name="publisher"
                        className="input1"
                        value={formData.publisher}
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label>Genre</label>
                    <input
                        type="text"
                        name="genre"
                        className="input1"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
                </div>
                <div className="second-row">
                <div >
                    <label>ISBN</label>
                    <input
                        type="text"
                        name="isbn"
                        className="input1"
                        value={formData.isbn}
                        onChange={handleChange}
                    />
                </div>
                </div>
                
                <div><button type="submit" className="add-btn">Submit</button></div>
            </form>
        </div>
    )
};

export default AddBook;
