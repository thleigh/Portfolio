import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand logo" to="/#Welcome" > TL </Link>
            </div>
        </nav>
        </>
    );
}

export default NavBar;