import { BrowserRouter  as Router, Switch, Route, Link, } from "react-router-dom";

// import css
import './App.css';
<<<<<<< HEAD
import { Map } from './components/Map';
import { Contact } from './components/Contact';
=======
>>>>>>> origin/develop

// import components
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/Footer';
import { MapPage } from "./components/MapPage";
import { Contact } from './components/Contact';


function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <Link className="nav-button" to={'/'}>Home</Link>
        <Link className="nav-button" to={'/map'}>Map</Link>
        <Link className="nav-button" to={'/contact'}>Team</Link>
        <Link className="nav-button" to={'/login'}>Login</Link>
      </nav>
      <Switch>
<<<<<<< HEAD
        <Route path="/map" component={ Map }/>
        <Route path="/contact" component={ Contact }/>
=======
        <Route exact path="/" component={ HomePage }/>
        <Route path="/contact" component={ Contact }/>
        <Route path="/map" component={ MapPage }/>
>>>>>>> origin/develop
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
