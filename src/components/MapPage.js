import React from "react";
import Map from "./Map";

export class MapPage extends React.Component {
    render() {
        return (
            <div class="d-flex flex-row">
                <div>
                    <Map/>
                <button class="testButton btn btn-success">TEST</button>
                </div>
                <div class="scoreBoard">
                    <h1>Screen Green Machine</h1>
                    <label>Hoeveelheid groen:</label>
                    <div class="progress barholder">
                        <div class="progress-bar bg-success greenbar" role="greenbar">20%</div>
                    </div>
                    <label>Hoeveelheid water:</label>
                    <div class="progress barholder">
                        <div class="progress-bar bg-info bluebar" role="bluebar">40%</div>
                    </div>
                    <label>Hoeveelheid gebouwen:</label>
                    <div class="progress barholder">
                        <div class="progress-bar bg-warning yellowbar" role="yellowbar">40%</div>
                    </div>
                    <br></br>
                    <h3 class ="Mapscore">Score / </h3>
                </div>
            </div>
        )
    }
}