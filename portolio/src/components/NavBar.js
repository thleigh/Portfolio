import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/" > Tanner Leigh
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto">
                        {
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link text-info" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-info" to="/Data">Work</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;