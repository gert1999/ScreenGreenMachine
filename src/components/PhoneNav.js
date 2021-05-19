import { BrowserRouter  as Router, Switch, Route, Link, } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import React, { useEffect } from "react";

export class PhoneNav extends React.Component {
    render() {
        return(
            <nav class="navbar">
                         <NavDropdown eventKey={3} title={<div style={{display: "inline-block"}}><FaIcons.FaBars/></div>}>
                            <NavDropdown.Item eventKey={3.1}>Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey={3.2}>Another action</NavDropdown.Item>
                        </NavDropdown>
            </nav>)}
}
export default PhoneNav;