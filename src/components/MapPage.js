import React from "react";
import Map from "./Map";
// import ScriptTag from "react-script-tag";
// import * as ml5 from "ml5";
import PicImg from "../img/groupphoto.jpeg";


export class MapPage extends React.Component {

    constructor(){
        super()

      //  this.classifier = ml5.imageClassifier("model/model.json", this.onModelReady);
        
    }

    onModelReady(){
        console.log("Model is ready");
    }

    fakeResult() {

        //this.classify()

        let max = 100;

        let greenResult = Math.floor(Math.random() * max);
        max = max - greenResult
        let blueResult = Math.floor(Math.random() * max);
        max = max - blueResult
        let yellowResult = max;

        let greenBar = document.getElementsByClassName("greenbar")[0];
        let blueBar = document.getElementsByClassName("bluebar")[0];
        let yellowBar = document.getElementsByClassName("yellowbar")[0];

        greenBar.innerHTML = `${greenResult}%`;
        greenBar.style.width = `${greenResult}%`;

        blueBar.innerHTML = `${blueResult}%`;
        blueBar.style.width = `${blueResult}%`;

        yellowBar.innerHTML = `${yellowResult}%`;
        yellowBar.style.width = `${yellowResult}%`;

        let scoreDiv = document.getElementsByClassName("Mapscore")[0];
        let score = greenResult * 86

        scoreDiv.innerHTML = `Score: ${score}/${100 * 86}`
    }

    classify(){
        let mapContainer = document.getElementsByTagName("img")[0]
        this.classifier.classify(mapContainer,()=> this.gotResult)
        
    }

    gotResult(error, results){
        console.log(results)
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <div>
                    <Map/>
                    <img src={PicImg}></img>
                <button onClick={() => this.fakeResult()} className="testButton btn btn-success">CALCULATE</button>
                </div>
                <div className="scoreBoard">
                    <h1>Screen Green Machine</h1>
                    <label>Hoeveelheid groen:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-success greenbar" role="greenbar">Not scanned</div>
                    </div>
                    <label>Hoeveelheid water:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-info bluebar" role="bluebar">Not scanned</div>
                    </div>
                    <label>Hoeveelheid gebouwen:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-warning yellowbar" role="yellowbar">Not scanned</div>
                    </div>
                    <br></br>
                    <h3 className="Mapscore">Score: Not scanned</h3>
                </div>
            </div>
        )
    }
}