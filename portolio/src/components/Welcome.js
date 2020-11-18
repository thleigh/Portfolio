import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
    return (
        <div>
            <div className="welcomeContainer">
                <div className="floating">
                    <h2> Welcome </h2>
                    <p> 
                        <div className="hover"> My name is <b>Tanner Leigh</b>. </div>
                        <br></br>
                        <div className="hover"> This is my portfolio site. </div>
                        <br></br>
                        <div className="hover"> Please make yourself at home. </div>
                        <div>
                            <Link to="/About">
                                <button className="enterButton">Enter</button>
                            </Link>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome