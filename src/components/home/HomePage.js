import React from "react";
import { Link } from "react-router-dom";

// import components for home page
import { TeamHome } from "./TeamHome";
import { InfoDivs } from "./InfoDivs";
// import Map from "../Map";

export class HomePage extends React.Component {
    constructor(){
        super()
        console.log("Test")
    }

    showMoreInfo(){
        let info=document.getElementById('info');
                info.scrollIntoView({
                    behavior:'smooth'
                })
    }
    render() {
        return (
            <div className="homeWrapper">
                <div className="d-flex flex-row justify-content-around flex-wrap conceptWrapper">
                    <div className="d-flex flex-column">
                        <h1>Screen Green Machine</h1>
                        <Link to="/map" className="mapBtn">Map</Link>
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
                            <button className="homeBtn" id="more_info" onClick={this.showMoreInfo}>↓</button>
                    </div>
                </div>
                <TeamHome />
                <InfoDivs />
            </div>
        )
    }
}