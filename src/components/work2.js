import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// const pluginWrapper = () => {
//     require('./statics/fullpage.scrollHorizontally.min');
//   };

const Work2 = (props) => {

    return (
        <div>
            <ReactFullpage
                // pluginWrapper = {pluginWrapper}

                //fullpage options
                licenseKey = {'SCROLL_KEY'}
                scrollingSpeed = {1000} /* Options here */
                scrollHorizontally = {true}  /* Because we are using the extension */
                scrollHorizontallyKey = {'HORIZONTAL_KEY'}

                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                        Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </div>
    )
}

export default Work2