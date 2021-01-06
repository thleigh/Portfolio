import React from 'react';
import Affirmations from '../assets/affirmationslogo.png'
import TBMP from '../assets/tbmplogo.png'
import Upnext from '../assets/upnextlogo.png'
import Foodfuse from '../assets/foodfuselogo.png'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const pluginWrapper = () => {
    require('./statics/fullpage.scrollHorizontally.min');
  };

const Work = (props) => {

    return (
        <div>
            <ReactFullpage
                pluginWrapper = {pluginWrapper}

                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
                scrollHorizontally = {true}  /* Because we are using the extension */
                scrollHorizontallyKey = {'YOUR KEY HERE'}

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

export default Work