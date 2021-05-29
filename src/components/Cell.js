export default class Cell {
    constructor(img, ind, classifier) {
        this.classifier = classifier
        this.index = ind
        this.img = img;
        this.el = this.createDiv();
        img.el.appendChild(this.el)
        // Calling the classify function in Cell, because I couldn't get it to work in MapPage.js
        // this.classify()
    }

    classify(){
        // const dataURI = this.el.toDataURL();
        // let image.src = dataURI

        // this.classifier.classify(image, (err, res) => {
        //     if (!err) {
        //         console.log(res)
        //     }
        // })


    }

    createDiv(){
        const div = document.createElement('div');
        let blockWidth = this.img.width / this.img.dimension;
        let blockHeight = this.img.height / this.img.dimension;
        const left = blockWidth * (this.index % this.img.dimension);
        const top = blockHeight * (Math.floor(this.index / this.img.dimension));

        div.style.backgroundImage = `url(${this.img.imageSrc})`;
        div.src = this.img.imageSrc;
        div.style.backgroundSize = `${this.img.width}px ${this.img.height}px`;
        div.style.position = 'absolute'
        div.style.width = `${blockWidth}px`
        div.style.height = `${blockHeight}px`

        div.style.left = `${left}px`;
        div.style.top = `${top}px`;

        div.style.backgroundPosition = `-${left}px -${top}px`

        return div
    }
}