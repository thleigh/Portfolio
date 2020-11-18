import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/tanner2.png';

const Dbout = (props) => {
    return (
        <div>
            <div className="about">
                <div>
                    <img className="profilePic" src={me} alt="Me"></img>
                </div>
                <div className="aboutContainer">
                    <Link className="nav-link text-dark" to="/work">Work</Link>
                    <Link className="nav-link text-dark" to="/About">About</Link>
                    <Link className="nav-link text-dark" to="/Resume">Resume</Link>
                    <Link className="nav-link text-dark" to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}

export default Dbout