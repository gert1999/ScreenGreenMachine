import { BrowserRouter  as Router, Switch, Route, Link, } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import React, { useEffect } from "react";

export class PhoneNav extends React.Component {
    render() {
        return(
            <nav class="navbar">
                         <NavDropdown eventKey={3} title={<div style={{display: "inline-block"}}><FaIcons.FaBars/></div>}>
        <Link className="nav-button" to={'/'}>Home</Link>
        <Link className="nav-button" to={'/map'}>Map</Link>
        <Link className="nav-button" to={'/contact'}>Team</Link>
        <Link className="nav-button" to={'/login'}>Login</Link>
        <Link className="nav-button-hamburger" to={'/'}></Link>
                        </NavDropdown>
            </nav>)}
}
export default PhoneNav;