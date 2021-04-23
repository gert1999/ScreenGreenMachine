import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// import components for home page
import { TeamHome } from "./TeamHome";
import { InfoDivs } from "./InfoDivs";
// import Map from "../Map";

export class HomePage extends React.Component {

    componentDidMount() {
        console.log("DidMount Project");
    }

    componentDidUpdate() {
        console.log("DidUpdate Project");
    }

    componentWillUnmount() {
        console.log("WillUnmount Project");
    }

    render() {
        return (
            <Router>
                <div className="homeWrapper">
                    <div className="d-flex flex-row justify-content-around flex-wrap conceptWrapper">
                        <div>
                            <h1>Screen Green Machine</h1>
                            <div>
                                <button className="mapBtn">Map</button>
                            </div>
                        </div>
                        <div className="d-flex flex-column uitlegDiv">
                            <h2>Uitleg over het concept</h2>
                            <p>
                                Met deze map beoordelen we de
                                hoeveelheid groen. Ook bepalen
                                we doormiddel van een AI waar
                                er het beste nog meer groen moet
                                komen.
                        </p>
                        </div>
                    </div>
                    <TeamHome />
                    <InfoDivs />
                </div>
            </Router>
        )
    }
}