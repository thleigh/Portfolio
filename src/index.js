import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import env from "react-dotenv"

import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from './components/Welcome';
import About from './components/About';
import Work from './components/Work';

import NavBar from './components/NavBar';

const pluginWrapper = () => {
  require('./statics/fullpage.continuousHorizontal.min.js');
};

const Fullpage = () => (
  <ReactFullpage
    pluginWrapper = {pluginWrapper}
    // API KEY
    licenseKey={process.env.SCROLL_KEY}
    // the page names in the url set as #
    anchors={['Welcome', 'Main', 'Work']}
    // navigation dots on the right
    navigation
    scrollingSpeed = {700}
    continuousHorizontalKey = {process.env.HORIZONTAL_KEY}
    continuousHorizontal = {true}  /* Because we are using the extension */

    render={({ state, fullpageApi }) => {
      return (
        <>
          <Router>
            <NavBar />
          </Router>
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
        </>
      );
    }}
  />
);

ReactDOM.render(
    <Fullpage />,
  document.getElementById('react-root')
);