export default class Cell {
    constructor(map, ind) {
        this.index = ind
        this.map = map;
        this.el = this.createCanvas();
        map.el.appendChild(this.el)
    }

    createCanvas(){
        let canvas = document.createElement("canvas")
        let ctx = canvas.getContext("2d");

        let blockWidth = this.map.width / this.map.dimension;
        console.log(this.map.width)
        let blockHeight = this.map.height / this.map.dimension
        console.log(this.map.height)

        canvas.width = blockWidth
        canvas.height = blockHeight
        canvas.style.display = "none"

        const left = blockWidth * (this.index % this.map.dimension);
        const top = blockHeight * (Math.floor(this.index / this.map.dimension));

        console.log(blockWidth)
        console.log(blockHeight)

        ctx.drawImage(this.map.mapBox, left, top, blockWidth, blockHeight, 0, 0, blockWidth, blockHeight)

        return canvas
    }

}