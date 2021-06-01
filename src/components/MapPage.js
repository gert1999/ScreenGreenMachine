import React, { createElement } from "react";
import Map from "./Map";
import * as ml5 from "ml5";
import Picture from "./Picture"
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

    async mapboxToImg() {
        let photoDiv = document.getElementById("testImg");

        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];
        console.log(mapContainer)
        let wrapper = document.querySelector('#image-wrapper')
        // getImageData
        // let newcanvas = document.createElement("canvas")
        // let ctx = newcanvas.getContext("2d");
        // newcanvas.width = mapContainer.width
        // newcanvas.height = mapContainer.height
        // ctx.drawImage(mapContainer, 0, 0)
        // wrapper.appendChild(newcanvas)

        // console.log(mapContainer)
        // const dataURI = mapContainer.toDataURL();
        // photoDiv.src = dataURI

        let image = new Picture(document.querySelector('#image-wrapper'), mapContainer, 900, this.classifier);
        // console.log(Object.keys(image)) 


        for (let i = 0; i < image.cells.length; i++) {
            console.log(image.cells[i].el)
            let newimage = image.cells[i].el.toDataURL();
            let imgElement = document.createElement("img")
            imgElement.src = newimage
            console.log(imgElement)
            this.classify(imgElement)
        }
        console.log(wrapper)
        // this.classify(photoDiv)
    }

    async classify(photoDiv) {
            let grassBar = document.getElementsByClassName("grassbar")[0];
            let treesBar = document.getElementsByClassName("treesbar")[0];
            let waterBar = document.getElementsByClassName("waterbar")[0];
            let buildingBar = document.getElementsByClassName("buildingbar")[0];
            let roadBar = document.getElementsByClassName("roadbar")[0];

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
            <div className="d-flex flex-row mappage-wrapper">

                <div>
                    <Map />
                    <img id="testImg" src="" className="preview" alt="preview of screenshot"></img>
                    {/* <canvas id="gridCanvas"></canvas> */}
                    <button onClick={() => this.mapboxToImg()} className="testButton btn btn-success">Bereken</button>
                </div>
                <div id="image-wrapper"></div>

                <div className="scoreBoard">
                    <h1 className="Title">Screen Green Machine</h1>
                    <label>vertrouwen dat het gras is:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-success grassbar" role="grassbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het bomen zijn:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-danger treesbar" role="treesbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het water is:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-info waterbar" role="waterbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het gebouwen zijn:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-warning buildingbar" role="buildingbar">Nog niet berekend</div>
                    </div>
                    <label>vertrouwen dat het wegen zijn:</label>
                    <div className="progress barholder">
                        <div className="progress-bar roadbar" role="roadbar">Nog niet berekend</div>
                    </div>
                </div>

            </div>
        )
    }
}