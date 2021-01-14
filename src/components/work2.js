import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require('../statics/fullpage.continuousHorizontal.min');
};
const Work2 = () => (
  <ReactFullpage
    pluginWrapper = {pluginWrapper}
    //fullpage options
    licenseKey = {'SCROLL_KEY'}
    scrollingSpeed = {1000} /* Options here */
    continuousHorizontalKey = {'dGFubmVyaGxlaWdoLmNvbV8xODhZMjl1ZEdsdWRXOTFjMGh2Y21sNmIyNTBZV3c9OHI1'}
    continuousHorizontal = {true}  /* Because we are using the extension */
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
);
export default Work2