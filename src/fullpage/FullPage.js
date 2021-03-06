import React from 'react';
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Contact from '../components/Contact'
import Work2 from '../components/Work2'
import './style.css';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

class FullPage extends React.Component {

  constructor(props) {
    super();
    this.state = {
      fullpages: [
        {
          page: <Welcome />
          
        },
        {
          page: <About />
        },
        {
          page: <Contact />,
        },
        {
          page: <Work2 />,
        }
      ],
    };
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    return (
      <div className="App">
        <ReactFullpage

          // API KEY
          licenseKey={'SCROLL_KEY'}
          // the page names in the url set as #
          anchors={['Welcome', 'Resources', 'About']}
          sectionSelector={SECTION_SEL}
          // navigation dots on the right
          navigation
          // Scroll speed
          scrollingSpeed = {700}

          render={({state, fullpageApi}) => (
            <ReactFullpage.Wrapper>

              <div className="section">
                <Welcome />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Contact />
              </div>
              <div className="section">
                <Work2 />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<FullPage />, document.getElementById('root'))
export default FullPage