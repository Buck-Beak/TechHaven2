import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import FanControl from './FanControl';
import LightControl from './LightControl';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/FanControl">
              <FanControl />
            </Route>
            <Route path="/LightControl">
              <LightControl />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;