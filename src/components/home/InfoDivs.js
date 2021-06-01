import React from "react";
import { Link } from "react-router-dom";

export class InfoDivs extends React.Component {
    render() {
        return (
            <div className="infoWrapper">
                <div className="infoDiv">
                    <h2>Ontvang updates</h2>
                    <div>
                        <p>
                            Wilt u updates krijgen van
                            aanpassingen over groen in
                            uw buurt. Registreer dan en
                            meld u aan voor de nieuwsbrief.
                    </p>
                        <Link to="/register" className="homeBtn">Registreren</Link>
                    </div>
                </div>
                <div className="infoDiv">
                    <h2>Waarom?</h2>
                    <div>
                        <p>
                            Wij willen als startup
                            Rotterdam duurzamer maken.
                            Wij hebben gemerkt dat er
                            in Rotterdam veel meer plek
                            is voor groen dan dat er
                            gebruikt wordt. Hier willen
                            wij iets aan doen!
                    </p>
                    </div>
                </div>
                <div className="infoDiv">
                    <h2>Hoe werkt het?</h2>
                    <div>
                        <p>
                            De applicatie maakt gebruik
                            van AI. Deze herkent groen
                            en raadt dan andere plaatsen
                            aan om groen te planten.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}