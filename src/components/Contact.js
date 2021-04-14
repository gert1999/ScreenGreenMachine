import React from "react";

export class Contact extends React.Component {
    constructor(){
        super()

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
                    <img className="groupphoto"></img>
                </left>
                <right>

                </right>
            </div>
        )
    }
}