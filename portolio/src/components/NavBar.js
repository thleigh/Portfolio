import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <BrowserRouter>
                    <Link className="navbar-brand" to="/" > TL </Link>
                </BrowserRouter>
            </div>
        </nav>
        </>
    );
}

export default NavBar;