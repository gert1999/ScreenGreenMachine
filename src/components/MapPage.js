import React from "react";
import Map from "./Map";
import Picture from "./Picture"
import * as ml5 from "ml5";
// import PicImg from "../img/groupphoto.jpeg";

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

    mapboxToImg() {
        let photoDiv = document.getElementById("testImg");

        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];

        const dataURI = mapContainer.toDataURL();
        photoDiv.src = dataURI
        
        const image = new Picture(document.querySelector('#image-wrapper'), photoDiv, 600);
        console.log(image)
        this.classify(photoDiv)
    }

    // imageCut(el, imageSrc, width) {

    //     this.parentEl = el;
    //     this.dimension = 3;
    //     this.imageSrc = imageSrc;
    //     this.width = width;
    //     this.cells = [];



    //     this.el = this.createWrapper()
    //     this.parentEl.appendChild(this.el)

    //     console.log(imageSrc.width, imageSrc.height)
    //     this.height = imageSrc.height * this.width / imageSrc.width
    //     this.el.style.width = `${this.width}px`
    //     this.el.style.height = `${this.height}px`

    //     // setup
    //     for (let i = 0; i < this.dimension * this.dimension; i++) {
    //         this.cells.push(new Cell(this, i))
            
    //     }
    // }

    // createWrapper() {
    //     const div = document.createElement('div')
    //     return div
    // }

    // async classify(photoDiv) {
        // let photoDiv = document.getElementById("testImg");
        // let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];
    async classify(photoDiv) {
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

        await this.classifier.classify(photoDiv, (err, res) => {
            if (!err) {
                console.log(res)

                // check which label the result has and assign to the right bar
                for (let r of res) {
                    if (r.label === "Grass") {
                        grassBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        grassBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label === "Trees") {
                        treesBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        treesBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label === "Water") {
                        waterBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        waterBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label === "Buildings") {
                        buildingBar.style.width = `${Math.ceil(r.confidence * 100)}%`
                        buildingBar.innerHTML = `${Math.floor(r.confidence * 100)}%`
                    } else if (r.label === "Roads") {
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
                    <img id="testImg" src="" className="preview" alt="preview of screenshot"></img>
                    <div id="image-wrapper"></div>
                    <canvas id="gridCanvas"></canvas>
                    <button onClick={() => this.mapboxToImg()} className="testButton btn btn-success">Bereken</button>
                </div>
                <div className="scoreBoard">
                    <h1>Screen Green Machine</h1>
                    <label>vertrouwen dat het gras is</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-success grassbar" role="grassbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het bomen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-danger treesbar" role="treesbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het water is</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-info waterbar" role="waterbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het gebouwen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-warning buildingbar" role="buildingbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het wegen zijn</label>
                    <div className="progress barholder">
                        <div className="progress-bar roadbar" role="roadbar">Nog niet berekend</div>
                    </div>
                    <br></br>
                    <h3 className="Mapscore">Score: Nog niet berekend</h3>
                </div>
            </div>
        )
    }
}