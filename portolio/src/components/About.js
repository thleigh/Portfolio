import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/tanner2.png';

const Dbout = ({fullpageApi}) => {
    return (
        <div>
            <div className="aboutMain">
                <div className="about">
                    <div>
                        <img className="profilePic" src={me} alt="Me"></img>
                    </div>
                    <div className="aboutContainer">

                        <p> I am a software engineer with an immeasurable passion for cultivating 
                            relationships and seeing the best in every moment. 
                            Having a background in film and graphic design, 
                            I know how to structure code and create content that is not only 
                            functional but beautiful. 
                            You can always count on me to bring people together to go above and beyond.
                        </p>

                        <Link className="nav-link text-dark">
                            <button onClick={() => fullpageApi.moveSectionDown()}>Work</button>
                        </Link>
                        <Link className="nav-link text-dark" to="/Resume">
                            <button>Resume</button>
                        </Link>
                        <Link className="nav-link text-dark" to="/about">
                            <button>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dbout