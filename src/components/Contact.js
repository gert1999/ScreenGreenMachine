import React from "react";

export class Contact extends React.Component {

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
                <div className="team-container">
                    <div className="member-container"> 
                        <div className="member">
                            <h2>Daphne Bruggeman</h2>
                            <p>taak</p>
                        </div>
                        <div className="member">
                            <h2>Marc van de Made</h2>
                            <p>taak</p>
                        </div>
                        <div className="member">
                            <h2>Quincy van der Sluis</h2>
                            <p>taak</p>
                        </div>
                        <div className="member">
                            <h2>Luuk 's Gravendijk</h2>
                            <p>taak</p>
                        </div>
                        <div className="member">
                            <h2>Gertjan Egas</h2>
                            <p>taak</p>
                        </div>
                    </div>

                    {/* teamphoto */}
                    <div className="groupphoto" > 

                    </div>
                </div>
            </div>
        )
    }
}
