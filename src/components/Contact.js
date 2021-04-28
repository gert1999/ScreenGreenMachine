import React from "react";


export class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            calculate : false
        }
    }

    componentDidMount(){
        console.log("DidMount Project");
    }
    
    componentDidUpdate(){
        console.log("DidUpdate Project");
    }
    
    componentWillUnmount(){
        console.log("WillUnmount Project");
    }
    render() {
        return(
            <div>
                Team 1
                <br></br>
                Daphne Bruggeman
                Gertjan Egas 
                Luuk Gravendijk
                Marc van der Made 
                Quincy van der Sluis
                <team-photo></team-photo>
                <br></br>
                Gemeente Rotterdam 
                <br></br>
                Tel: 14 010
                Web: https://www.rotterdam.nl/
                <br></br> 
                API
                MapBox
            </div>
        )
    }
    

}
