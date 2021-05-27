import React from "react";
import Map from "./Map";
// import ScriptTag from "react-script-tag";
import * as ml5 from "ml5";
// import model from "../model/model.json"
import PicImg from "../img/groupphoto.jpeg";

export class MapPage extends React.Component {

    constructor() {
        super()
        console.log("constructor")
        this.classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/xLBZPJD5G/model.json", (err, res) => {
            if (!err) {
                console.log("model loaded")
            } else {
                console.log(err)
            }
        });

    }

    // fakeResult() {

    //     let max = 100;

    //     let greenResult = Math.floor(Math.random() * max);
    //     max = max - greenResult
    //     let blueResult = Math.floor(Math.random() * max);
    //     max = max - blueResult
    //     let yellowResult = max;

    //     let greenBar = document.getElementsByClassName("greenbar")[0];
    //     let blueBar = document.getElementsByClassName("bluebar")[0];
    //     let yellowBar = document.getElementsByClassName("yellowbar")[0];

    //     greenBar.innerHTML = `${greenResult}%`;
    //     greenBar.style.width = `${greenResult}%`;

    //     blueBar.innerHTML = `${blueResult}%`;
    //     blueBar.style.width = `${blueResult}%`;

    //     yellowBar.innerHTML = `${yellowResult}%`;
    //     yellowBar.style.width = `${yellowResult}%`;

    //     let scoreDiv = document.getElementsByClassName("Mapscore")[0];
    //     let score = greenResult * 86

    //     scoreDiv.innerHTML = `Score: ${score}/${100 * 86}`
    // }

    mapboxToImg() {
        let photoDiv = document.getElementById("testImg");

        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];

        const dataURI = mapContainer.toDataURL();
        photoDiv.src = dataURI

        this.classify()
    }

    async classify() {
        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];

            let grassBar = document.getElementsByClassName("grassbar")[0];
            let treesBar = document.getElementsByClassName("treesbar")[0];
            let waterBar = document.getElementsByClassName("waterbar")[0];
            let buildingBar = document.getElementsByClassName("buildingbar")[0];
            let roadBar = document.getElementsByClassName("roadbar")[0];

        // this.gc = document.getElementById("gridCanvas");
        // let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];

        // const dataURI = mapContainer.toDataURL();
        // photoDiv.src = dataURI

        // this.ctx = this.gc.getContext("2d");
        // this.ctx.clearRect(0, 0, this.gc.width, this.gc.height)
        // console.log(this.gc)

        // let x = 0;
        // let y = 0;

        // console.log(dataURI)

        // for (let i = 0; i < 10; i++) {
        //     for (let j = 0; j < 10; j++) {

        //         x = i * 40
        //         y = j * 40

        //         this.ctx.drawImage(photoDiv, x, y, 40, 40, x+i*5, y+j * 5, 40, 40)

        //     }  
        // }

        await this.classifier.classify(mapContainer, (err, res) => {
            if (!err) {
                console.log(res)

                // check which label the result has and assign to the right bar
                for (let r of res) {
                    if (r.label == "Grass") {
                        grassBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        grassBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label =="Trees") {
                        treesBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        treesBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label =="Water") {
                        waterBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        waterBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label =="Buildings") {
                        buildingBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        buildingBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label =="Roads") {
                        roadBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        roadBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    }
                }

            } else {
                console.log(err)
            }
        })
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <div>
                    <Map />
                    <img id="testImg" src={PicImg}></img>
                    <canvas id="gridCanvas"></canvas>
                    <button onClick={() => this.mapboxToImg()} className="testButton btn btn-success">CALCULATE</button>
                </div>
                <div className="scoreBoard">
                    <h1>Screen Green Machine</h1>
                    <label>vertrouwen dat het grass is</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-success grassbar" role="grassbar">Not scanned</div>
                    </div>
                    <label>vertrouwen dat het bomen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-danger treesbar" role="treesbar">Not scanned</div>
                    </div>
                    <label>vertrouwen dat het water is</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-info waterbar" role="waterbar">Not scanned</div>
                    </div>
                    <label>vertrouwen dat het gebouwen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-warning buildingbar" role="buildingbar">Not scanned</div>
                    </div>
                    <label>vertrouwen dat het wegen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar roadbar" role="roadbar">Not scanned</div>
                    </div>
                    <br></br>
                    <h3 className="Mapscore">Score: Not scanned</h3>
                </div>
            </div>
        )
    }
}