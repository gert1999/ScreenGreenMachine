import { BrowserRouter  as Router, Switch, Route, Link, } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

// import css
import './App.css';


// import components
import { HomePage } from './components/home/HomePage';
import { Footer } from './components/Footer';
import { MapPage } from "./components/MapPage";
import { Contact } from './components/Contact';
import { Nav } from './components/Nav'
import { PhoneNav } from './components/PhoneNav'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navclass"><Nav/></div>
        <div className="phonenavclass"><PhoneNav/></div>

      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/contact" component={ Contact }/>
        <Route path="/map" component={ MapPage }/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
