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

        this.imgArray = [];
        this.resultArray = [];
    }

    async mapboxToImg() {
        // let photoDiv = document.getElementById("testImg");

        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];
        // console.log(mapContainer)
        let wrapper = document.querySelector('#image-wrapper')

        let image = new Picture(wrapper, mapContainer, mapContainer.getBoundingClientRect().width);

        this.imgArray = [];

        wrapper.innerHTML = ""

        for (let i = 0; i < image.cells.length; i++) {
            // console.log(image.cells[i].el)
            let newimage = image.cells[i].el.toDataURL();
            let imgElement = document.createElement("img")
            imgElement.src = newimage
            imgElement.style.margin = "2px"
            wrapper.appendChild(imgElement)
            // console.log(imgElement)

            // this.classify(imgElement)
            this.imgArray.push(imgElement)
        }
        // console.log(wrapper)
        // this.classify(photoDiv)
        this.classify()
    }

    async classify() {

        this.resultArray = [];

        for (let img of this.imgArray) {
            await this.classifier.classify(img, (err, res) => {
                this.resultArray.push(res[0].label);
                if (!err) {
                    // console.log(res)
                    // check which label the result has and assign to the right bar
                    if (res[0].label === "Grass") {
                        img.style.border = "solid 5px green"
                    } else if (res[0].label === "Trees") {
                        img.style.border = "solid 5px darkgreen"
                    } else if (res[0].label === "Water") {
                        img.style.border = "solid 5px blue"
                    } else if (res[0].label === "Buildings") {
                        img.style.border = "solid 5px gray"
                    } else if (res[0].label === "Roads") {
                        img.style.border = "solid 5px black"
                    }
                } else {
                    console.log(err)
                }
            })
        }
        this.setResults()
    }

    setResults() {
        let green = 0
        let water = 0
        let city = 0

        for (let r of this.resultArray) {
            if (r === "Grass" || r === "Trees") {
               green++ 
            } else if (r === "Water") {
                water++
            } else if (r === "Buildings" || r === "Roads") {
                city++
            }
        }

        let grassBar = document.getElementsByClassName("grassbar")[0];
        let waterBar = document.getElementsByClassName("waterbar")[0];
        let buildingBar = document.getElementsByClassName("buildingbar")[0];

        grassBar.style.width = `${green / this.resultArray.length * 100}%`
        grassBar.innerHTML = `${Math.floor(green / this.resultArray.length * 100)}%`

        waterBar.style.width = `${water / this.resultArray.length * 100}%`
        waterBar.innerHTML = `${Math.floor(water / this.resultArray.length * 100)}%`

        buildingBar.style.width = `${city / this.resultArray.length * 100}%`
        buildingBar.innerHTML = `${Math.floor(city / this.resultArray.length * 100)}%`
    }

    render() {
        return (
            <div className="d-flex flex-row mappage-wrapper">

                <div>
                    <Map />
                    <img id="testImg" src="" className="preview" alt="preview of screenshot"></img>
                    {/* <canvas id="gridCanvas"></canvas> */}
                    <button onClick={() => this.mapboxToImg()} className="testButton btn btn-success">Bereken</button>
                    <div id="image-wrapper"></div>
                </div>

                <div className="scoreBoard">
                    <h1 className="Title">Screen Green Machine</h1>
                    <label>Procent aan groen:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-success grassbar" role="grassbar">Nog niet berekend</div>
                    </div>
                    <label>Procent aan water:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-info waterbar" role="waterbar">Nog niet berekend</div>
                    </div>
                    <label>Procent aan verstedelijking:</label>
                    <div className="progress barholder">
                        <div className="progress-bar bg-warning buildingbar" role="buildingbar">Nog niet berekend</div>
                    </div>
                </div>
            </div>
        )
    }
}