import React from "react";

<<<<<<< HEAD

export class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            calculate : false
        }
    }
=======
export class Contact extends React.Component {
>>>>>>> origin/develop

    componentDidMount(){
        console.log("DidMount Project");
    }
    
    componentDidUpdate(){
        console.log("DidUpdate Project");
    }
    
    componentWillUnmount(){
        console.log("WillUnmount Project");
    }
<<<<<<< HEAD
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
=======
    
    render() {
        return(
            <div className="main">
                <left>
                    <h1>Team 1</h1>
                    <ul>
                        <li>Daphne</li>
                        <li>Gertjan</li>
                        <li>Luuk</li>
                        <li>Marc</li>
                        <li>Quincy</li>
                    </ul>
                    <img className="groupphoto" alt="team screen green machine"></img>
                </left>
                <right>

                </right>
            </div>
        )
    }
}
>>>>>>> origin/develop
