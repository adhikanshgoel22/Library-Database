// import { describe } from "node:test";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar=()=>{
    return(
        <div className="nav-container">
            <div ><Link to="/" className="home">Home</Link></div>
            <div ><Link to="/user" className="ico">Search the Database</Link></div>
            <div ><Link to="/login" className="ico">Admin</Link></div>
            <div ><Link to="/aboutus" className="ico">About Us</Link></div>
            <div ><Link to="/aboutus" className="ico">Contact</Link></div>


        </div>
    )
}

export default Navbar;