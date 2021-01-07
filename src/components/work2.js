import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Welcome from './components/Welcome';
import About from './components/About';
import Work from './components/Work'

const pluginWrapper = () => {
    require('../statics/fullpage.continuousHorizontal.min.js');
  };

const Work2 = (props) => {

    return (
        <div>
            <ReactFullpage
                pluginWrapper = {pluginWrapper}

                //fullpage options
                licenseKey = {'SCROLL_KEY'}
                scrollingSpeed = {1000} /* Options here */
                continuousHorizontal = {true}  /* Because we are using the extension */
                continuousHorizontalKey = {'HORIZONTAL_KEY'}

                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                        <Router>
                            <Welcome fullpageApi={fullpageApi}/>
                        </Router>
                        </div>
                        <div className="section">
                        <Router>
                            <About fullpageApi={fullpageApi}/>
                        </Router>
                        </div>
                        <div className="section">
                        <Router>
                            <Work />
                        </Router>
                        </div>
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </div>
    )
}

export default Work2