import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <div className='navbar'>  
                <Link to="/" className="nav-link" id="page-name">Dog Fetcher</Link>
                <div className='nav-links'>
                <Link to="/Breed" className='nav-link'>Breed</Link>
                <Link to="/Random" className='nav-link'>Random</Link>
                <Link to="/About" className='nav-link'>About</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;