import React from 'react';

const Work = (props) => {
    return (
        <div>
            <div className="workGrid">   
                <div className="box">
                    <a href="https://affirmations-client.herokuapp.com/" target="_blank">Affirmations</a>
                    <a href="https://github.com/thleigh/Affirmations-App" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="http://upnext-app.herokuapp.com/" target="_blank">Upnext</a>
                    <a href="https://github.com/thleigh/upnext" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="https://foodfuse.herokuapp.com/" target="_blank">FoodFuse</a>
                    <a href="https://github.com/thleigh/FoodFuse" target="_blank">Github Repository</a>
                </div>
                <div className="box">
                    <a href="" target="_blank">The Mcdonalds Project</a>
                    <a href="https://github.com/thleigh/The_Big_Mac_Front_End" target="_blank">Github Repository</a>
                </div>
            </div>
        </div>
    )
}

export default Work