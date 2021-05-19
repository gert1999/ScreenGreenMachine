import { BrowserRouter  as Router, Switch, Route, Link, } from "react-router-dom";
import React, { useEffect } from "react";

export class Nav extends React.Component {
    render() {
        return(
    <nav>
        <Link className="nav-button" to={'/'}>Home</Link>
        <Link className="nav-button" to={'/map'}>Map</Link>
        <Link className="nav-button" to={'/contact'}>Team</Link>
        <Link className="nav-button" to={'/login'}>Login</Link>
        <Link className="nav-button-hamburger" to={'/'}></Link>
    </nav>)}
}
export default Nav;