import React from "react";
import { Link, } from "react-router-dom";

export class TeamHome extends React.Component {
    render() {
        return (
                <div className="d-flex flex-column teamDiv">
                    <div className="homephoto"></div>
                    <div className="teamText">
                        <h2>Ons team</h2>
                        <p>
                            Wij zijn het team dat deze
                            Super coole applicatie heeft
                            gemaakt. Wil je meer over ons
                            weten klik dan op de knop
                            hieronder.
                    </p>
                        <Link to="/contact" className="homeBtn">Meer over ons!</Link>
                    </div>
                </div>
        )
    }
}