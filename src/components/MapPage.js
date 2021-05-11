import React from "react";
import Map from "./Map";

export class MapPage extends React.Component {
    render() {
        return (
            <div className="d-flex flex-row">
                <div>
                    <Map/>
                <button className="testButton btn btn-success">TEST</button>
                </div>
                <div className="scoreBoard">
                    <h1>Screen Green Machine</h1>
                    <ul>
                        <li>Amount of green:</li>
                        <li>...%</li>
                        <li>iets</li>
                        <li>iets</li>
                        <li>iets</li>
                    </ul>
                </div>
            </div>
        )
    }
}