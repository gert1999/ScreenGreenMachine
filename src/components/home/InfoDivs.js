import React from "react";

export class InfoDivs extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Ontvang updates</h2>
                    <p>
                        Wilt u updates krijgen van
                        aanpassingen over groen in
                        uw buurt. Registreer dan en
                        meld u aan voor de newsbrief.
                    </p>
                    <button>Registreren</button>
                </div>
                <div>
                    <h2>Waarom?</h2>
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
                <div>
                    <h2>Hoe werkt het?</h2>
                    <p>
                        De applicatie maakt gebruik
                        van AI. Deze herkent groen
                        en raad dan andere plaatsen
                        aan om groen te planten.
                    </p>
                </div>
            </div>
        )
    }
}