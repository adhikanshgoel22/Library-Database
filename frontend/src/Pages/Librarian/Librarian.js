import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../User/SearchBar";
// import User from "../User/User";

import './Librarian.css';
import Navbar from "../Home/Navbar";
const Librarian=()=>{
    return(
        <div className="library">
           <div className="welcome">Welcome Back Sir!! </div>
            
            <div className="lib-links">
            <div className="linkbtn"><Link to="/admindb" className="linktxt">View Database</Link></div>
            <div className="linkbtn"><Link to="/add" className="linktxt">Add New Book</Link></div>
            
            <div className="linkbtn"><Link to="/" className="linktxt">Logout</Link></div>
            </div>
            
            
        </div>
    )
}

export default Librarian;