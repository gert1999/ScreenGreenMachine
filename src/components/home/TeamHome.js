import React from "react";

export class TeamHome extends React.Component {

    render() {
        return (
            <div className="d-flex flex-column teamDiv">
                <img></img>
                <div className="teamText">
                    <h2>Ons team</h2>
                    <p>
                        Wij zijn het team dat deze
                        Super coole applicatie heeft
                        gemaakt. Wil je meer over ons
                        weten klik dan op de knop
                        hieronder.
                    </p>
                    <button className="homeBtn">Meer over ons!</button>
                </div>
            </div>
        )
    }
}