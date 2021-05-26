import React from "react";

export class Login extends React.Component {

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
                <div className="infoWrapper LoginDiv">
                    <div className="larg-width">
                        <h2>Registeren en inloggen</h2>
                        <div>
                            <p>
                                Registeren en inloggen is op het moment nog niet beschikbaar.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
