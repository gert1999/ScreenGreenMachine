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
                            <a href="https://www.linkedin.com/in/daphne-bruggeman-6306316b/">Daphne Bruggeman</a>
                            <p>Onderzoekend technoloog</p>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/marc-van-der-made-b15914193/">Marc van der Made</a>
                            <p>Onderzoekend technoloog</p>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/quincy-van-der-sluis-863438156/">Quincy van der Sluis</a>
                            <p>Betrokken technoloog</p>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/luuk-s-gravendijk-b9379219a/">Luuk 's Gravendijk</a>
                            <p>Ontwerpend technoloog</p>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/gertjan-e-a875a912b/">Gertjan Egas</a>
                            <p>Ondernemend technoloog</p>
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
