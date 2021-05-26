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
                            <a href="https://www.linkedin.com/in/daphne-bruggeman-6306316b/" >
                                <p className = "contactTitle"><b>Daphne Bruggeman</b></p>
                                <p className = "contactText">Onderzoekend technoloog</p>
                            </a>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/marc-van-der-made-b15914193/" >
                                <p className = "contactTitle"><b>Marc van der Made</b></p>
                                <p className = "contactText">Onderzoekend technoloog</p>
                            </a>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/quincy-van-der-sluis-863438156/" >
                                <p className = "contactTitle"><b>Quincy van der Sluis</b></p>
                                <p className = "contactText">Betrokken technoloog</p>
                            </a>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/luuk-s-gravendijk-b9379219a/" >
                                <p className = "contactTitle"><b>Luuk 's Gravendijk</b></p>
                                <p className = "contactText">Ontwerpend technoloog</p>
                            </a>
                        </div>
                        <div className="member">
                            <a href="https://www.linkedin.com/in/gertjan-e-a875a912b/" >
                                <p className = "contactTitle"><b>Gertjan Egas</b></p>
                                <p className = "contactText">Ondernemend technoloog</p>
                            </a>
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
