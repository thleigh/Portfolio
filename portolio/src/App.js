import './App.css';
import NavBar from './components/NavBar'
import Fullpage from './fullpage/FullPage'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
          <div>
            <Fullpage />
          </div>
      </Router>
    </div>
  );
}

export default App;
