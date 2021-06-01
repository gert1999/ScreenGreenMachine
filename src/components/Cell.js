export default class Cell {
    constructor(img, ind, classifier) {
        this.classifier = classifier
        this.index = ind
        this.img = img;
        // this.el = this.createDiv();
        this.el = this.createCanvas();
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

    createCanvas(){
        let canvas = document.createElement("canvas")
        let ctx = canvas.getContext("2d");
        // let image = document.getElementById("testImg")
        // canvas.style.position = 'relative'
        let blockWidth = this.img.clientRectWidth / this.img.dimension;
        let blockHeight = this.img.clientRectHeight / this.img.dimension

        canvas.width = blockWidth
        canvas.height = blockHeight

        const left = blockWidth * (this.index % this.img.dimension);
        const top = blockHeight * (Math.floor(this.index / this.img.dimension));
        console.log(left, top)
        console.log(blockWidth, blockHeight)
        console.log(this.img.imageSrc)
        // image.onload = () => {
    
            // ctx.fillStyle = "black";
            // ctx.fillRect(0, 0, 200, 200);
            // console.log(image)
            ctx.drawImage(this.img.imageSrc, left, top, blockWidth, blockHeight, 0, 0, blockWidth, blockHeight)
            console.log(ctx)
            // let imageData = ctx.getImageData(left, top ,blockWidth, blockHeight)
            // ctx.putImageData(imageData, left, top)
         
        // }
        return canvas
    }

    createDiv(){
        const div = document.createElement('div');
        let blockWidth = this.img.width / this.img.dimension;
        let blockHeight = this.img.height / this.img.dimension;
        const left = blockWidth * (this.index % this.img.dimension);
        const top = blockHeight * (Math.floor(this.index / this.img.dimension));
        
        // const img = document.createElement('img');
        div.style.backgroundImage = `url(${this.img.imageSrc})`;
        console.log(this.img.imageSrc)
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