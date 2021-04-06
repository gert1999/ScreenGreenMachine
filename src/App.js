import './App.css';
import { Map } from './components/Map';

import { BrowserRouter  as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <Link className="nav-button" to={'/home'}>Home</Link>
        <Link className="nav-button" to={'/map'}>Map</Link>
        <Link className="nav-button" to={'/contact'}>Contact</Link>
        <Link className="nav-button" to={'/login'}>Login</Link>
      </nav>
      <Switch>
        <Route path="/map" component={ Map }/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;