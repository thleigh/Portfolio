import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact'

const Fullpage = () => (
  <ReactFullpage
    // API KEY
     licenseKey={'SCROLL_KEY'}
    // the page names in the url set as #
    anchors={['Welcome', 'About', 'Contact']}
    // navigation dots on the right
    navigation
    scrollingSpeed = {700}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Router>
              <Welcome />
            </Router>
          </div>
          <div className="section">
            <Router>
              <About />
            </Router>
          </div>
          <div className="section">
            <Router>
              <Contact />
            </Router>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(
    <Fullpage />,
  document.getElementById('react-root')
);