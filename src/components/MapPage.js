import React from "react";
import Map from "./Map";

export class MapPage extends React.Component {
    render() {
        return (
            <div class="d-flex flex-row">
                <div><Map/></div>
                <div class="scoreBoard">
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