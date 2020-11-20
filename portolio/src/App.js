import './App.css';
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Work from './components/Work'
import About from './components/About'
import FullPage from './fullpage/FullPage'

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          {/* <Route path="/Welcome" component={Welcome} />
          <Route path="/Work" component={Work} />
          <Route path="/About" component={About} />
          <Route path="*" component={Welcome} /> */}
          <FullPage />
        </Switch>
      </div>
    </div>
  );
}

export default App;
