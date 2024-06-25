import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import axios from "axios";
import img1 from './books.jpg'; // Assuming you need this image somewhere

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(formData)
            const response = await axios.post('http://localhost:8000/api/login', formData);
            console.log(response.data);
            // setTimeout(2000);
            // 
            setTimeout(()=>{
                navigate('/librarian');
            },1000);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setErrorMessage('You are already registered. Please login.');
            } else {
                setErrorMessage('Login failed. Please check your credentials.');
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login">Login</div>
            <div className="details">
                <div className="password">Email
                    <input 
                        type="text" 
                        className="input" 
                        name="email" 
                        onChange={handleChange} 
                        value={formData.email} 
                    />
                </div>
                <div className="password">Password
                    <input 
                        type="password" 
                        className="input" 
                        name="password" 
                        onChange={handleChange} 
                        value={formData.password} 
                    />
                
                    
                </div>
                <div><button className="btn" onClick={handleSubmit} >Submit</button></div>
            </div>
        </div>
    );
};

export default Login;
