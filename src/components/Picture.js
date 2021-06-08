import Cell from "./Cell";

export default class Picture {
    constructor(el, mapbox, width) {
        this.parentEl = el;
        this.dimension = 10;
        this.mapBox = mapbox;
        this.width = width
        // this.height = height
        this.cells = [];
        this.init()

        // console.log(this.mapBox.width)
        // console.log(this.width)
        // console.log(width)

        this.height = this.mapBox.height * this.width / this.mapBox.width;
        // this.height = this.mapBox.getBoundingClientRect().height
        // console.log(this.height)
        // this.height = height


        // console.log(this.width, this.height)

        // this.el.style.width = `${this.width}px`
        // this.el.style.height = `${this.height}px`

        this.setup();
    }

    init() {
        this.el = this.createWrapper()
        this.parentEl.appendChild(this.el)
    }

    createWrapper() {
        let canvasWrapper = document.getElementById("canvas-wrapper")

        if(canvasWrapper !== null) {
            canvasWrapper.remove()
        }

        const div = document.createElement('div')
        div.setAttribute("id", "canvas-wrapper")
        div.style.position = 'relative';
        div.style.margin = '0 auto'

        return div
    }

    setup() {
        this.cells.length = 0;
        for (let i = 0; i < this.dimension * this.dimension; i++) {
            this.cells.push(new Cell(this, i))
        }
    }
}