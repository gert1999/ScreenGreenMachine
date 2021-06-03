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
    }

    async mapboxToImg() {
        // let photoDiv = document.getElementById("testImg");

        let mapContainer = document.getElementsByClassName("mapboxgl-canvas")[0];
        console.log(mapContainer)
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
        console.log(wrapper)
        // this.classify(photoDiv)
        this.classify()
    }

    async classify() {
        let grassBar = document.getElementsByClassName("grassbar")[0];
        let treesBar = document.getElementsByClassName("treesbar")[0];
        let waterBar = document.getElementsByClassName("waterbar")[0];
        let buildingBar = document.getElementsByClassName("buildingbar")[0];
        let roadBar = document.getElementsByClassName("roadbar")[0];

        for (let img of this.imgArray) {
            await this.classifier.classify(img, (err, res) => {
                if (!err) {
                    console.log(res)
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