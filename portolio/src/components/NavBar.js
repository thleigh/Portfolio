import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/tanner2.png';

const NavBar = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/" > TL </Link>
            </div>
        </nav>
        <div className="navbarContainer">
            <div>
                <img className="profilePic" src={me} alt="Me"></img>
            </div>
            <div className="navbarRight">
                <Link className="nav-link text-dark" to="/work">Work</Link>
                <Link className="nav-link text-dark" to="/About">About</Link>
                <Link className="nav-link text-dark" to="/Resume">Resume</Link>
                <Link className="nav-link text-dark" to="/about">About</Link>
            </div>
        </div>
        </>
    );
}

export default NavBar;