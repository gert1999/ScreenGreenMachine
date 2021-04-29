import React from "react";
import { Link } from "react-router-dom";

// import components for home page
import { TeamHome } from "./TeamHome";
import { InfoDivs } from "./InfoDivs";
// import Map from "../Map";

export class HomePage extends React.Component {
    render() {
        return (
                <div className="homeWrapper">
                    <div className="d-flex flex-row justify-content-around flex-wrap conceptWrapper">
                        <div>
                            <h1>Screen Green Machine</h1>
                            <div>
                                <Link to="/map" className="mapBtn">Map</Link>
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
        )
    }
}