import './App.css';
import { Map } from './components/Map';
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/Footer';

import { BrowserRouter  as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Contact } from './components/Contact';


function App() {
  return (
    <Router>
      <Redirect exact from="/" to="home" />
      <div className="App">
      <nav>
        <Link className="nav-button" to={'/home'}>Home</Link>
        <Link className="nav-button" to={'/map'}>Map</Link>
        <Link className="nav-button" to={'/contact'}>Team</Link>
        <Link className="nav-button" to={'/login'}>Login</Link>
      </nav>
      <Switch>
        <Route path="/home" component={ HomePage }/>
        <Route path="/map" component={ Map }/>
        <Route path="/contact" component={ Contact }/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
