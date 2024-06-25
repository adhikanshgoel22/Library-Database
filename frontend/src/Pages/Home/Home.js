import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
const Home=()=>{
    return(
        <div className="home-container">
            <Navbar></Navbar>
            <div className="fact">"According to Google, 129,864,880 million books had been published as of 2010. 
            That number is obviously a lot higher now. So when you say out loud “Ugh, can’t find a good book to read,” 
            know that you have a lot to choose from."</div>
        </div>
    )
}

export default Home;