import { BrowserRouter  as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// import css
import './App.css';

// import components
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/Footer';
import { MapPage } from "./components/MapPage";
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
        <Route path="/contact" component={ Contact }/>
        <Route path="/map" component={ MapPage }/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
