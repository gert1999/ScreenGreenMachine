import Cell from "./Cell";

export default class Picture {
    constructor(el, imageSrc, width){

        this.parentEl = el;
        this.dimension = 3;
        this.imageSrc = imageSrc;
        this.width = width;
        this.cells = [];

        this.init()
        const img = new Image()
        img.src = this.imageSrc
        console.log(img.width, img.height)

        this.height = img.height * this.width / img.width
        this.el.style.width = `${this.width}px`
        this.el.style.height = `${this.height}px`

        this.setup();

  
    }

    init() {
        this.el = this.createWrapper()
        this.parentEl.appendChild(this.el)
    }

    createWrapper() {
        const div = document.createElement('div')
        div.style.position = 'relative';
        div.style.margin = '0 auto'
        return div
    }

    setup() {
        console.log("test")
        for (let i = 0; i < this.dimension * this.dimension; i++) {
            this.cells.push(new Cell(this, i))
        }
    }

}