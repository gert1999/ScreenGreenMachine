import Cell from "./Cell";

export default class Picture {
    constructor(el, imageSrc, width, classifier){
        this.classifier = classifier
        this.parentEl = el;
        this.dimension = 3;
        this.imageSrc = imageSrc;
        this.width = width;
        this.cells = [];
        this.init()
        // const img = new Image()
        // img.onload = () => {
            console.log(this.imageSrc.width, this.imageSrc.height)
            console.log(this.imageSrc.getBoundingClientRect().width, this.imageSrc.getBoundingClientRect().height)
    
            this.clientRectWidth = this.imageSrc.getBoundingClientRect().width
            this.clientRectHeight = this.imageSrc.getBoundingClientRect().height
            this.height = this.clientRectHeight * this.width / this.clientRectWidth

            console.log(this.width, this.height)

            this.el.style.width = `${this.clientRectWidth}px`
            this.el.style.height = `${this.clientRectHeight}px`

            this.setup();
        // }
        // img.src = this.imageSrc
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
        for (let i = 0; i < this.dimension * this.dimension; i++) {
            this.cells.push(new Cell(this, i, this.classifier))
        }
    }
}