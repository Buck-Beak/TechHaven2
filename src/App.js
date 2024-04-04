import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import FanControl from './FanControl';
import LightControl from './LightControl';
import Alarm from './Alarm';

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
            <Route path="/Alarm">
              <Alarm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;