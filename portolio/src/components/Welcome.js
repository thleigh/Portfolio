import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Welcome = (props) => {

    let moveSectionDown = () => {
        fullpage_api.moveSectionDown()
    }

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
                            <button className="enterButton" onClick={() => moveSectionDown()}>Enter</button>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome