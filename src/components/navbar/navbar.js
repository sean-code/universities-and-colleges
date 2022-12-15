import React from "react";
import "./navbar.css";
import { NavLink } from 'react-router-dom';



function NavBar(){
    return(
        <>
            <div className="navbar-container">
            <div className="logo">
                <h2>Uni Search+</h2>
            </div>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/search">SEARCH</NavLink>
            </div>
        </>
    )
}

export default NavBar;