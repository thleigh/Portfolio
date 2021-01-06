import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from './components/Welcome';
import About from './components/About';
import Work from './components/Work'
import Work2 from './components/Work2'

import NavBar from './components/NavBar';

const Fullpage = () => (
  <ReactFullpage
    // API KEY
    licenseKey={'SCROLL_KEY'}
    // the page names in the url set as #
    anchors={['Welcome', 'Main', 'Work']}
    // navigation dots on the right
    navigation
    scrollingSpeed = {700}

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
            <div className="section">
              <Router>
                <Work2 />
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