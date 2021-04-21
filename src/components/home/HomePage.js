import React from "react";

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
            <div className="homeWrapper">
                <div>
                    <div>
                        <h1>Screen Green Machine</h1>
                    </div>
                    <div>
                        <h2>Uitleg over het concept</h2>
                        <button></button>
                        <p>Met deze map beoordelen we de
                        hoeveelheid groen. Ook bepalen
                        we doormiddel van een AI waar
                        er het beste nog meer groen moet
                        komen. </p>
                    </div>
                </div>
                <TeamHome />
                <InfoDivs />
            </div>
        )
    }
}